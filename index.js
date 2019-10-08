const express = require('express')
const app = express()
const PORT = 3000

app.get('/api/:message', (req,res) => {
  const msg = req.params.message
  res.send(`you sent ${msg}`)
});

app.listen(PORT, () => console.log(`server started successfully on port ${PORT}`))