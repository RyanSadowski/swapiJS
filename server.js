var express       = require('express'),
cors              = require('cors'),
bodyParser        = require('body-parser'),
mongoose          = require('mongoose'),
People            = require('./models/people'),
Films             = require('./models/films'),
Planets           = require('./models/planets'),
Species           = require('./models/species'),
Starships         = require('./models/starships'),
Vehicles          = require('./models/vehicles'),
config            = require('./config'); // get our config file

var app = express();
app.use(bodyParser());
app.use(cors());

var router = express.Router();

router.use(function(req, res, next) {
  // do logging
  console.log('I sense the force...');
  next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req, res) {
  res.json({ message: 'Please see API documentation' });
});


router.route('/people')
// get all the people (accessed at GET http://localhost:8080/api/people)
.get(function(req, res) {
  People.find(function(err, people) {
    if (err)
    res.send(err);

    res.json(people);

  });
})
// create a person (accessed at POST http://localhost:8080/api/people)
.post(function(req, res) {
  var people = new People();
  console.log(req);
  people.name       = req.body.name;
  people.height     = req.body.height;
  people.mass       = req.body.mass;
  people.hair_color = req.body.hair_color;
  people.skin_color = req.body.skin_color;
  people.eye_color  = req.body.eye_color;
  people.birth_year = req.body.birth_year;
  people.gender     = req.body.gender;
  people.homeworld  = req.body.homeworld;
  people.films      = req.body.films;
  people.species    = req.body.species;
  people.vehicles   = req.body.vehicles;
  people.starships  = req.body.starships;
  people.url        = req.body.url;
  people.created    = req.body.created;
  people.edited     = req.body.edited;
  // save the person and check for errors
  people.save(function(err) {
    if (err)
    res.send(err);

    res.json({ message: 'Person created!' });
  });
});

app.use('/api', router);

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || config.database)
.then(() => console.log('Connected to DeathStar aka DB'))
.catch((err) => console.error(err));



var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('Im one with the force on port :' + port);
});
