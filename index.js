// middleware
const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const bodyParser ;
const port = 3000;

// Setting up Database
const mongodb = require('mongodb');
const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/toolbox-server', {
  useMongoClient: true,
  /* other options */
});

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Setting templating engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  app.listen(process.env.PORT || port, function() {
    console.log('server started: ' + port);
    console.log('env port' + process.env.PORT);
  });
});
