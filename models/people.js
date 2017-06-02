var mongoose = require('mongoose');
var schema = new mongoose.Schema({

  name:String,
  height:String,
  mass:String,
  hair_color:String,
  skin_color:String,
  eye_color:String,
  birth_year:String,
  gender:String,
  homeworld:String,
  films:Array,
  species:Array,
  vehicles:Array,
  starships:Array,
  url:String,
  created:{ type: Date, default: Date.now },
  edited:{ type: Date, default: Date.now }

})
module.exports = mongoose.model('People', schema);
