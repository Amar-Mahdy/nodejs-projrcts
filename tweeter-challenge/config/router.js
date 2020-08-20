const express = require('express')
const router = express.Router()
const controller = require('../controller/controllers')

router.get('/tweets',controller.gethomepage)
router.all('/add-tweet',controller.postNewTweet)
router.get('/tweet/:id',controller.showOneTweet)
router.all('/edit-tweet/:id',controller.updateOneTweet)
router.get('/delete-tweet/:id',controller.deleteOneTweet)






module.exports = router