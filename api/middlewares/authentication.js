const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models').User;

function passwordsMatch(submittedPassword, storedPasswordHash) {
  return bcrypt.compareSync(submittedPassword, storedPasswordHash);
}

passport.use(
  new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  }, (email, password, done) => {
    User.findOne({ where: { email } })
      .then(user => {
        if (!user) {
          console.log('\n\nLogin Failed: User does not exist\n\n');
          return done(null, false, { message: 'Login Failed' });
        }
        if (passwordsMatch(password, user.passwordHash) === false) {
          console.log('\n\nLogin Failed: Passwords did not match\n\n');
          return done(null, false, { message: 'Login Failed' });
        }
        console.log('\n\nSuccessful Login\n\n');
        return done(null, user, { message: 'Login Successful' });
      }).catch(err => done(err));
  })
);

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  User.findByPk(id)
    .then(user => {
      if (!user) {
        done(null, false);
        return;
      }
      done(null, user);
      return;
    }).catch(err => done(err, null));
});

passport.isAuthenticated = () =>
  (req, res, next) => req.user ? next() : res.sendStatus(401);

module.exports = passport;