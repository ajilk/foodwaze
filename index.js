const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

app.get('/api/:message', (req, res) => {
  const msg = req.params.message
  res.send(`you sent ${msg}`)
});

app.listen(PORT, () => console.log(`server started successfully on port ${PORT}`))