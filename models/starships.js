var mongoose = require('mongoose');
var schema = new mongoose.Schema({

  name:String,
  model:String,
  starship_class:String,
  manufacturer:String,
  cost_in_credits:String,
  length:String,
  crew:String,
  passengers:String,
  max_atmosphering_speed:String,
  hyperdrive_rating:String,
  mglt:String,
  cargo_capacity:String,
  consumables:String,
  films:Array,
  pilots:Array,
  url:String,
  created:{ type: Date, default: Date.now },
  edited:{ type: Date, default: Date.now }

})
module.exports = mongoose.model('starships', schema);
