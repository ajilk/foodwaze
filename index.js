const express = require('express')
const path = require('path')
const app = express()

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))

// Anything that doesn't match the above, send back index.html
app.get('/api/:ID', (req, res) => {
  const ID = req.params.ID
  let body
  switch (ID) {
    case "1": body = "ONE"; break;
    case "2": body = "TWO"; break;
    case "3": body = "THREE"; break;
    default: body = "OTHER NUMBER"; break;
  }
  res.json({body: body})
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`server started successfully on port ${PORT}`))