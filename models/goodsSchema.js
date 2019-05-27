const mongoose = require('mongoose')

const goodsSchema = mongoose.Schema({
  heroName :String,
  age : Number,
  heroSex : String,
  address : String,
  heroPosition : [],
  imgArr:[],
  favourite:String,
  explain:String,
}, { collection: 'goods'})
//这里mongoose.Schema要写上第二个参数，明确指定到数据库中的哪个表取数据


const Hero = module.exports = mongoose.model('meiyi', goodsSchema);
