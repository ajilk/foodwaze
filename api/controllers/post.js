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
      console.log(result);
      Post.create({
        title: req.body.title,
        location: req.body.location,
        description: req.body.description,
        images: [result['public_id']],
      }).then(post => {
        req.user.addPosts(post)
        res.json({ postID: post.get('id') })
      });
      fs.unlinkSync(req.file.path);
    });
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
    attributes: ['id', 'title', 'location', 'description', 'images', 'createdAt'],
    order: [['createdAt', 'DESC']],
    limit: 20,
    subQuery: false,
  })
  res.status(200).json(posts);
})

router.get('/all/user', async (req, res) => {
  let posts = await Post.findAll({
    include: [{
      model: User,
      as: 'owner',
      attributes: ['firstName', 'lastName'],
      where: { id: req.user['id'] }

    }],
    attributes: ['id', 'title', 'location', 'description', 'images', 'createdAt'],
    order: [['createdAt', 'DESC']],
    limit: 20,
    subQuery: false,
  })
  res.status(200).json(posts);
})

router.put('/delete', async (req, res) => {
  const { postId } = req.body;
  Post.findByPk(postId).then(post => {
    cloudinary.uploader.destroy(post.images[0]);
    post.destroy();
    res.status(200).json({ message: `Deleted post: ${postId}` });
  });
});

module.exports = router;