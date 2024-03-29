const express = require('express')
const cors = require('cors');
const routes = require('./routes')
const connectionDb = require('./db')
const app = express()
const port = 3333


connectionDb();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



