
## Links

Deployed Heroku URL:
https://secure-stream-40646.herokuapp.com/

Deployed GitHub URL:
https://fire-breathingrubberducks.github.io/bucketlist_client/

Frontend Repo:
https://github.com/Fire-BreathingRubberDucks/bucketlist_client

ERD:
https://imgur.com/a/ozvU8

## App Description
The bucketlist app gives people the ability to keep track of the experiences that they want to have before they...kick the bucket. They can quickly jot down a name and a type of experience or they can go further and estimate cost, location, time required, etc. The app also allows for tracking of what experiences a user has completed and which are still outstanding.
Users can view, add, edit, and delete their experiences, which is completed using ajax calls to the backend api, seen below.
Users have a one-to-many relationship with experiences.

Authentication

HTTP Verb | URL                   | Controller#Action
--------- | --------------------- | -----------------
POST      | /sign-up              | users#signup
POST      | /sign-in              | users#signin
PATCH     | /change-password/:id  | users#changepw
DELETE    | /sign-out/:id         | users#signout

Experiences

HTTP Verb | URL               | Controller#Action
--------- | ----------------- | -----------------
GET       | /experiences      | experiences#index
GET       | /experiences/:id  | experiences#show
POST      | /experiences      | experiences#create
PATCH     | /experiences/:id  | experiences#update
DELETE    | /experiences/:id  | experiences#destroy

## Technologies Used
* express
* mongoose
* heroku
* mongoDB
* javascript

## Unsolved Issues

## Planning/Process/Problem-Solving
As a group, we made an initial plan together about the high-level tasks to be completed and in what rough order. We used trello to create these tasks and keep them organized on a board. As we found bugs or enhancements or broke our tasks into more detailed pieces, we added them to the board.

We changed our working process on the fly based on what work needed to be done and who was available. We tried group-programming with all three developers, pair programming with two developers while the third worked alone, and also pair-programming with two developers working alone and the third bouncing between as need arose.

We ran into an issue solving the index action not showing just the data owned by the signed-in user, but rather showing all data for all users. We were originally group-programming on that task, but as we struggled to determine the fix, we broke up to all work on it separately until a solution was found.

That was the general cadence for problem solving as we were usually programming with a buddy on the more troublesome tasks. This meant we had someone to talk the problem through with, which almost always resulted in a fix. However, the cases where it did not, the third developer was pulled in.

The only time this failed was on git/GitHub issues, where we needed instructor guidance.
