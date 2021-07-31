const express = require('express')
const routes = require('./routes')
const connectionDb = require('./db')
const app = express()
const port = 3000


connectionDb();

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



