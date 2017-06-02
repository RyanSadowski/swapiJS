var mongoose = require('mongoose');
var schema = new mongoose.Schema({

  name:String,
  classification:String,
  designation:String,
  average_height:String,
  average_lifespan:String,
  hair_colors:String,
  skin_colors:String,
  eye_colors:String,
  homeworld:String,
  language:String,
  people:Array,
  films:Array,
  url:String,
  created:{ type: Date, default: Date.now },
  edited:{ type: Date, default: Date.now }

})
module.exports = mongoose.model('species', schema);
