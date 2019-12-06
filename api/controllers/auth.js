const router = require('express').Router();
const passport = require('../middlewares/authentication');
const { User } = require('../models');

router.post('/signup', (req, res) => {
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
      res.status(400).json({ message: 'Signup Failed', err });
    });
});

router.post('/login',
  passport.authenticate('local'),
  (req, res) => {
    res.json(req.user);
  });

router.post('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Logout Successful' });
});

router.get('/user', (req, res) => {
  if (req.user) res.json(req.user);
  else res.json({});
});

module.exports = router;