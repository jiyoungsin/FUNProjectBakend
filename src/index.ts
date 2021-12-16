const express = require('express')
const app = express()
const PORT = 5000;

app.get('/', function (req, res) {
  res.send('Hello Worldsssss')
})
 
app.listen(PORT  || 5000, () => {
    console.log('backend is running on Port :', PORT);
});