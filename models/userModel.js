const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
    maxlength: 25
  },
  username: {
    type: String,
    required: true,
    trim: true,
    maxlength: 25,
    unique: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: 'https://www.flaticon.com/svg/vstatic/svg/1738/1738691.svg?token=exp=1615776521~hmac=cb31764d667aac714df37c2558941489'
  },
  role: {type: String, default: 'user'},
  gender: {type: String, default: 'male'},
  mobile: {type: String, default: ''},
  address: {type: String, default: ''},
  story: {
    type: String, 
    default: '',
    maxlength: 200
  },
  website: {type: String, default: ''},
  followers: [
    {
      type: mongoose.Types.ObjectId, 
      ref: 'user'
    }
  ],
  following: [
    {
      type: mongoose.Types.ObjectId, 
      ref: 'user'
    }
  ]
}, {
  timestamps: true
})

module.exports = mongoose.model('user', userSchema)