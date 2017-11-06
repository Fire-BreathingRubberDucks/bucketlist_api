'use strict'

const mongoose = require('mongoose')

const experienceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  eventType: {
    type: String,
    required: true,
    enum: ['Movie', 'Book', 'Show', 'Concert', 'Sporting Event', 'Sight-Seeing', 'Relaxation', 'Outdoors', 'Goal', 'Other']
  },
  timeRequired: {
    type: String
  },
  location: {
    type: String
  },
  cost: {
    type: Number
  },
  details: {
    type: String
  },
  completed: {
    type: Boolean,
    required: true,
    default: false
  },
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

const Experience = mongoose.model('Experience', experienceSchema)

module.exports = Experience
