const express = require('express')
const session = require('express-session')
const bodyParser = require("body-parser");
var cors = require('cors')
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//For using CORS middleware
app.use(cors())

app.use(
  session({
    secret: 'Quiz',
    resave: false,
    saveUninitialized: true
  })
);
app.use(require("./routes/routes"));
app.listen(3000, () => console.log('Example app listening on port 3000!'))