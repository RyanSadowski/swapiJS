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

router.route('/films')
// get all the people (accessed at GET http://localhost:8080/api/people)
.get(function(req, res) {
  Films.find(function(err, films) {
    if (err)
      res.send(err);

    res.json(films);
  });
})
// create a film (accessed at POST http://localhost:8080/api/film)
.post(function(req, res) {
  var film = new Films();
  film.title         = req.body.title;
  film.episode_id    = req.body.episode_id;
  film.opening_crawl = req.body.opening_crawl;
  film.director      = req.body.director;
  film.producer      = req.body.producer;
  film.release_date  = req.body.release_date;
  film.characters    = req.body.characters;
  film.planets       = req.body.planets;
  film.species       = req.body.species;
  film.vehicles      = req.body.vehicles;
  film.starships     = req.body.starships;
  film.url           = req.body.url;
  film.created       = req.body.created;
  film.edited        = req.body.edited;
  // save the film and check for errors
  film.save(function(err) {
    if (err)
    res.send(err);

    res.json({ message: 'film created!' });
  });
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

router.route('/planets')
// get all the people (accessed at GET http://localhost:8080/api/people)
.get(function(req, res) {
  Planets.find(function(err, planets) {
    if (err)
      res.send(err);

    res.json(planets);
  });
})
// create a film (accessed at POST http://localhost:8080/api/film)
.post(function(req, res) {
  var planet = new Planets();
  planet.name             = req.body.name;
  planet.diameter         = req.body.diameter;
  planet.rotation_period  = req.body.rotation_period;
  planet.orbital_period   = req.body.orbital_period;
  planet.gravity          = req.body.gravity;
  planet.population       = req.body.population;
  planet.climate          = req.body.climate;
  planet.terrain          = req.body.terrain;
  planet.surface_water    = req.body.surface_water;
  planet.films            = req.body.films;
  planet.residents        = req.body.residents;
  planet.url              = req.body.url;
  planet.created          = req.body.created;
  planet.edited           = req.body.edited;
  // save the film and check for errors
  planet.save(function(err) {
    if (err)
    res.send(err);

    res.json({ message: 'film created!' });
  });
});

router.route('/species')
// get all the people (accessed at GET http://localhost:8080/api/people)
.get(function(req, res) {
  Species.find(function(err, species) {
    if (err)
      res.send(err);

    res.json(species);
  });
})
// create a film (accessed at POST http://localhost:8080/api/film)
.post(function(req, res) {
  var planet = new Species();
  species.name             = req.body.name;
  species.classification   = req.body.classification;
  species.designation      = req.body.designation;
  species.average_height   = req.body.average_height;
  species.average_lifespan = req.body.average_lifespan;
  species.hair_colors      = req.body.hair_colors;
  species.skin_colors      = req.body.skin_colors;
  species.eye_colors       = req.body.eye_colors;
  species.homeworld        = req.body.homeworld;
  species.language         = req.body.language;
  species.people           = req.body.people;
  species.films            = req.body.films;
  species.url              = req.body.url;
  species.created          = req.body.created;
  species.edited           = req.body.edited;
  // save the film and check for errors
  species.save(function(err) {
    if (err)
    res.send(err);

    res.json({ message: 'species created!' });
  });
});

router.route('/starships')
// get all the people (accessed at GET http://localhost:8080/api/people)
.get(function(req, res) {
  Starships.find(function(err, starships) {
    if (err)
      res.send(err);

    res.json(starships);
  });
})
// create a film (accessed at POST http://localhost:8080/api/film)
.post(function(req, res) {
  var starships = new Starships();
  starships.name                    = req.body.name;
  starships.model                   = req.body.model;
  starships.starship_class          = req.body.starship_class;
  starships.manufacturer            = req.body.manufacturer;
  starships.cost_in_credits         = req.body.cost_in_credits;
  starships.length                  = req.body.length;
  starships.crew                    = req.body.crew;
  starships.passengers              = req.body.passengers;
  starships.max_atmosphering_speed  = req.body.max_atmosphering_speed;
  starships.hyperdrive_rating       = req.body.hyperdrive_rating;
  starships.mglt                    = req.body.mglt;
  starships.cargo_capacity          = req.body.cargo_capacity;
  starships.consumables             = req.body.consumables;
  starships.films                   = req.body.films;
  starships.pilots                  = req.body.pilots;
  starships.url                     = req.body.url;
  starships.created                 = req.body.created;
  starships.edited                  = req.body.edited;
  // save the film and check for errors
  starships.save(function(err) {
    if (err)
    res.send(err);

    res.json({ message: 'starship created!' });
  });
});

router.route('/vehicles')
// get all the people (accessed at GET http://localhost:8080/api/people)
.get(function(req, res) {
  Vehicles.find(function(err, vehicles) {
    if (err)
      res.send(err);

    res.json(vehicles);
  });
})
// create a film (accessed at POST http://localhost:8080/api/film)
.post(function(req, res) {
  var vehicles = new Vehicles();
  vehicles.name                    = req.body.name;
  vehicles.model                   = req.body.model;
  vehicles.vehicle_class           = req.body.vehicle_class;
  vehicles.manufacturer            = req.body.manufacturer;
  vehicles.cost_in_credits         = req.body.cost_in_credits;
  vehicles.length                  = req.body.length;
  vehicles.crew                    = req.body.crew;
  vehicles.passengers              = req.body.passengers;
  vehicles.max_atmosphering_speed  = req.body.max_atmosphering_speed;
  vehicles.cargo_capacity          = req.body.cargo_capacity;
  vehicles.consumables             = req.body.consumables;
  vehicles.films                   = req.body.films;
  vehicles.pilots                  = req.body.pilots;
  vehicles.url                     = req.body.url;
  vehicles.created                 = req.body.created;
  vehicles.edited                  = req.body.edited;
  // save the film and check for errors
  vehicles.save(function(err) {
    if (err)
    res.send(err);

    res.json({ message: 'vehicles created!' });
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
