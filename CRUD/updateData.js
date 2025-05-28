const Order = require('../models/Order');
const Product = require('../models/Product');
const Review = require('../models/Review');
const User = require('../models/User');

async function UpdateOrderData(updates) {
  for (const update of updates) {
    console.log('Updating order ' + update._id);
    console.log('Before Update');
    const original = await Order.findById(update._id).lean();
    console.table([original]);
    const result = await Order.findByIdAndUpdate(update._id, update, { new: true }).lean();
    console.log('After Update');
    console.table([result]);
    console.log(result ? `Updated order: ${result._id}` : `Order not found: ${update._id}`);
  }
}

async function UpdateProductData(updates) {
  for (const update of updates) {
    console.log('Updating product ' + update._id);
    console.log('Before Update');
    const original = await Product.findById(update._id).lean();
    console.table([original]);
    const result = await Product.findByIdAndUpdate(update._id, update, { new: true }).lean();
    console.log('After Update');
    console.table([result]);
    console.log(result ? `Updated product: ${result._id}` : `Product not found: ${update._id}`);
  }
}

async function UpdateReviewData(updates) {
  for (const update of updates) {
    console.log('Updating review ' + update._id);
    console.log('Before Update');
    const original = await Review.findById(update._id).lean();
    console.table([original]);
    const result = await Review.findByIdAndUpdate(update._id, update, { new: true }).lean();
    console.log('After Update');
    console.table([result]);
    console.log(result ? `Updated review: ${result._id}` : `Review not found: ${update._id}`);
  }
}

async function UpdateUserData(updates) {
  for (const update of updates) {
    console.log('Updating user ' + update._id);
    console.log('Before Update');
    const original = await User.findById(update._id).lean();
    console.table([original]);
    const result = await User.findByIdAndUpdate(update._id, update, { new: true }).lean();
    console.log('After Update');
    console.table([result]);
    console.log(result ? `Updated user: ${result._id}` : `User not found: ${update._id}`);
  }
}

module.exports = {
  UpdateOrderData,
  UpdateProductData,
  UpdateReviewData,
  UpdateUserData
};
