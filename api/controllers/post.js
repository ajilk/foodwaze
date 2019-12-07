const router = require('express').Router();
const { Post, User } = require('../models');

router.post('/create', (req, res) => {
  console.log("POST body: ", req.body);
  if (req.user) {
    Post.create({
      title: req.body.title,
      location: req.body.location,
      description: req.body.description,
    }).then(post => {
      req.user.addPosts(post)
      res.json({ postID: post.get('id') })
    });
  }
});

router.get('/all', async (req, res) => {
  let posts = await Post.findAll({
    include: [{
      model: User,
      as: 'owner',
      attributes: ['firstName', 'lastName'],
    }],
    attributes: ['id', 'title', 'location', 'description', 'createdAt', 'updatedAt'],
    order: [['createdAt', 'DESC']],
    limit: 20,
    subQuery: false,
  })
  res.status(200).json(posts);
})

module.exports = router;