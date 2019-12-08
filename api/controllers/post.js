const router = require('express').Router();
const multer = require('multer');
const fs = require('fs');
const upload = multer({ dest: 'uploads/' })
const cloudinary = require('cloudinary');
const { Post, User } = require('../models');

router.post('/create', upload.single('image'), (req, res) => {
  console.log('post/create -> FILE: ', req.file)
  console.log('post/create -> BODY: ', req.body)

  if (req.user) {
    cloudinary.uploader.upload(req.file.path, (result) => {
      Post.create({
        title: req.body.title,
        location: req.body.location,
        description: req.body.description,
        images: [result['public_id']],
      }).then(post => {
        req.user.addPosts(post)
        res.json({ postID: post.get('id') })
      });
    });
    fs.unlinkSync(req.file.path);
  } else {
    res.status(500).json({ error: 'User not logged in?' })
  }
});

router.get('/all', async (req, res) => {
  let posts = await Post.findAll({
    include: [{
      model: User,
      as: 'owner',
      attributes: ['firstName', 'lastName'],
    }],
    attributes: ['title', 'location', 'description', 'images', 'createdAt'],
    order: [['createdAt', 'DESC']],
    limit: 20,
    subQuery: false,
  })
  res.status(200).json(posts);
})

module.exports = router;