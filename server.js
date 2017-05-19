var express = require('express')

var app = express()

var PORT = process.env.PORT || 3000

app.listen(PORT, function (){
  console.log('server listening on port: ', PORT)
})

app.use(express.static('Game')) // Serve up the game folder
