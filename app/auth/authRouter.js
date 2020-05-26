const router = require('express').Router()
module.exports = router

const messages = require('../../middleware/messages').messageDictionary

router.post("/register", (req, res, next) => {

  next(messages.notImplemented)

})

router.post("/login", (req, res, next) => {

  next(messages.notImplemented)

})

router.get("/", (req, res, next) => {
  next(messages.notImplemented)
})