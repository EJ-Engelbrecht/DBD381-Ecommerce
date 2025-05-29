const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  userId: { type: String, required: true },
  orderDate: { type: Date, required: true },
  products: [
    {
      productId: { type: String, required: true },
      quantity: { type: Number, required: true, min: 1 }
    }
  ],
  status: {
    type: String,
    enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'],
    default: 'Pending'
  }
});

module.exports = mongoose.model("Order", orderSchema);
