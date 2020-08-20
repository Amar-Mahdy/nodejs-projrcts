const mongoose = require('mongoose')
const Schema = mongoose.Schema

const massageSchema = new Schema({
  title:{
      type: String,
      required: true,
      minlength:20
  },
  tweet: {
      type: String,
      required: true,
      maxlength:50
  }
},{timestamps: true})

const Tweet = mongoose.model('Tweet',massageSchema)

module.exports = {
    Tweet
}