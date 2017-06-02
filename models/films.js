var mongoose = require('mongoose');
var schema = new mongoose.Schema({

  title:String,
  episode_id:Number,
  opening_crawl:String,
  director:String,
  producer:String,
  release_date:String,
  characters:Array,
  planets:Array,
  species:Array,
  vehicles:Array,
  starships:Array,
  url:String,
  created:{ type: Date, default: Date.now },
  edited:{ type: Date, default: Date.now }

})
module.exports = mongoose.model('films', schema);
