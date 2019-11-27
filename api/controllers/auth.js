const router = require('express').Router();
const passport = require('../middlewares/authentication');
const { User } = require('../models');

router.post('/signup', () => {
  console.log("POST body: ", req.body);
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  })
    .then(user => {
      req.login(user, () => res.status(201).json(user));
    })
    .catch(err => {
      req.status(400).json({ message: 'Signup Failed', err });
    });
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json(req.user)
});

router.post('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Logout Successful' });
});

module.exports = router;