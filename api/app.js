const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./models');
const express = require('express');
const session = require('express-session');
const PORT = process.env.PORT || 8000;
const app = express()

// Allows parsing of 'application/json' content in http requests
app.use(bodyParser.json());

// Add logging
const logFormat = process.env.NODE_ENV === 'production' ? 'combined' : 'dev';
app.use(morgan(logFormat));

// Setup passport and session cookies
app.use(session({
  secret: node.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Mount routes
app.use('/api', require('./controllers'));

// Configure DB
db.sequelize.sync({ force: false });

if (process.env.NODE_ENV === 'production') {
  // Serve static files from the React frontend app
  app.use(express.static(path.join(__dirname, '../client/build')))

  // Handle unknown routes 
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
  })
}

app.listen(PORT, () => console.log(`Listening on ${PORT}`))