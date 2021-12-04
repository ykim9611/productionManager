/* eslint-disable no-undef */
const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.static(__dirname + '/../dist/'))
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})