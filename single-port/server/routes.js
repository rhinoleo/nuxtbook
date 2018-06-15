'use strict'

import { Router } from 'express'
// import store from '../store'

const router = Router()

// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' },
]

// const works = this.$store.state.works
const works = []

export default () => {

  // Home page.
  router.get('/', (req, res, next) => {
    var output = {
      message: 'Hello World!'
    }
    res.body = output
    next()
  })

  // Get all users.
  router.get('/users', (req, res, next) => {
    res.body = users
    next()
  })

  // Get the user by id.
  router.get('/users/:id', (req, res, next) => {
    const id = parseInt(req.params.id)
    if (id >= 0 && id < users.length) {
      res.body = users[id]
      next()
    } else {
      var err = new Error('User Not Found')
      err.status = 400
      next(err)
    }
  })

    // Get all works.
    router.get('/works', (req, res, next) => {
      res.body = works
      next()
    })

    // Add a work.
    router.get('/addwork', (req, res, next) => {
      next()
    })
  
    // Get the work by id.
    router.get('/works/:id', (req, res, next) => {
      const id = parseInt(req.params.id)
      if (id >= 0 && id < works.length) {
        res.body = works[id]
        next()
      } else {
        var err = new Error('Work Not Found')
        err.status = 400
        next(err)
      }
    })

  // Handle routes not found.
  // https://stackoverflow.com/questions/38681318/express-4-middleware-when-route-is-not-found-finalhandler-not-called-how-to-c
  router.use(function(req, res, next) {
    if (!req.route) {
      var err = new Error('Route Not Found')
      err.status = 404
      return next(err)
    }
    next()
  })

  return router
}

// export default router
