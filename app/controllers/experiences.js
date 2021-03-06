'use strict'

const controller = require('lib/wiring/controller')
const models = require('app/models')
const Experience = models.experience

const authenticate = require('./concerns/authenticate')
const setUser = require('./concerns/set-current-user')
const setModel = require('./concerns/set-mongoose-model')

const index = (req, res, next) => {
  const owner = { _owner: req.user.id }
  Experience.find(owner)
    .then(experiences => res.json({
      experiences: experiences.map((e) =>
        e.toJSON({ virtuals: true, user: req.user }))
    }))
    .catch(next)
}

const show = (req, res) => {
  res.json({
    experience: req.experience.toJSON({ virtuals: true, user: req.user })
  })
}

const create = (req, res, next) => {
  const experience = Object.assign(req.body.experience, {
    _owner: req.user._id
  })
  Experience.create(experience)
    .then(experience =>
      res.status(201)
        .json({
          experience: experience.toJSON({ virtuals: true, user: req.user })
        }))
    .catch(next)
}

const update = (req, res, next) => {
  delete req.body.experience._owner  // disallow owner reassignment.

  req.experience.update(req.body.experience)
    .then(() => res.sendStatus(204))
    .catch(next)
}

const destroy = (req, res, next) => {
  req.experience.remove()
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = controller({
  index,
  show,
  create,
  update,
  destroy
}, { before: [
  { method: setUser, only: ['show'] },
  { method: authenticate, except: ['show'] },
  { method: setModel(Experience), only: ['show'] },
  { method: setModel(Experience, { forUser: true }), only: ['update', 'destroy'] }
] })
