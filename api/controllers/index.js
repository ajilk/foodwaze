const express = require('express');
const router = express.Router();

const authController = require('./auth');
const postController = require('./post');

router.use('/auth', authController);
router.use('/post', postController);

module.exports = router;