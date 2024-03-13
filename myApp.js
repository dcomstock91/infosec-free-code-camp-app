const express = require('express');
const helmet = require('helmet');
const app = express();
const timeInSeconds = 7776000;


app.use(helmet({
  frameguard: {     //configure
    action: 'deny'
  },
  contentSecurityPolicy: {    //enable and configure
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'",'trusted-cdn.com']
   }
  },
  hsts: {
    maxAge: timeInSeconds, force: true
  },
  noCache: true,     //enable
  dnsPrefetchControl: true,   //enable
  hidePoweredBy: true,
  ieNoOpen: true,
  xssFilter: true,
  noSniff: true,
}))







































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
const PORT = process.env.PORT || 3000;
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Useful Programmer Info Security App Started on Port ${PORT}');
  `);
});
