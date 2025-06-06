const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  email: { 
    type: String, 
    required: true
  },
  address: { type: String, required: true },
  joinDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
