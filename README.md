#Guest Speaker App
[![Build Status](https://travis-ci.org/ErikAbrahamson/guest-speaker-app.svg?branch=master)](https://travis-ci.org/ErikAbrahamson/guest-speaker-app) [![Coverage Status](https://coveralls.io/repos/ErikAbrahamson/guest-speaker-app/badge.svg?branch=master&service=github)](https://coveralls.io/github/ErikAbrahamson/guest-speaker-app?branch=master)
An app to allow students to rate and provide feedback on a guest speaker.

##Schedule  

1. Part 1
  * App overview
  * Setup (Generator, Github, Travis CI, Heroku)
  * Add User Stories
  * Add Unit Tests
  * Add Code Coverage
1. Part 2
  * Authentication
1. Part 3
  * Add Feature One (via TDD)
1. Part 4
  * Add Feature Two (via TDD)
1. Part 5
  * Add Feature Three (via TDD)  

##User Stories

1. As a user, I want to:
  * View past speakers
  * View upcoming speakers
  * Vote on past speakers
  * Add feedback/comments
  * Vote on *potential* upcoming topics
  * Login/logout
  * Suggest speakers & topics
1. As an admin, I want to:
  * Approve/reject users wanting to login
  * Toggle suggestion features
  * CRUD topics
  * Login/logout
  * CRUD students
  * CRUD speakers

##Stack

* Issue Tracker: Github Issues
* Build System: Gulp
* Testing: Mocha, Chai, Travis CI, Istanbul (coverage)
* Language Runtime: ES5
* Package Mgmt: npm
* Server: Node, Express
* Database: Postgres
* Front End: jQuery
* CSS Framework: Skeleton
* Templates: Swig

##Tests  

Without code coverage  
```sh
$ npm test
```
With code coverage  
```sh
$ npm run coverage
```
