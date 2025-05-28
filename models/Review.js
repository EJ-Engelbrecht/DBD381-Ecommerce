const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  productId: { type: String, required: true },
  userId: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true, maxlength: 500 },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Review', reviewSchema);
