const express = require('express');
const cors = require('cors');
const server = express();

const favfoods = [
  {
    "food": "sushi",
    "age": 13
  }
];

const names = [
  {
    "name": "sanjay kumar rajpoot"
  },
  {
    "name": "nina"
  },
  {
    "name": "sarah"
  }
];


server.use(cors());

server.get('/name', function (request, response){
  response.send(names)
})

server.get('/favfoods', function (request, response){
  response.send(favfoods)
})


server.listen(3001, function () { console.log('server has started') });
