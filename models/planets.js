var mongoose = require('mongoose');
var schema = new mongoose.Schema({

  name:String,
  diameter:Number,
  rotation_period:String,
  orbital_period:String,
  gravity:String,
  population:String,
  climate:String,
  terrain:String,
  surface_water:String,
  films:Array,
  residents:Array,
  url:String,
  created:{ type: Date, default: Date.now },
  edited:{ type: Date, default: Date.now }

})
module.exports = mongoose.model('planets', schema);
