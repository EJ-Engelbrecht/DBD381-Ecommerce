const Order = require('../models/Order');
const Product = require('../models/Product');
const Review = require('../models/Review');
const User = require('../models/User');

async function DeleteOrderData(ids) {
  for (const id of ids) {
    console.log('Deleting order ' + id);
    const data = await Review.findById(id).lean();
    console.table([data]);
    const result = await Order.findByIdAndDelete(id);
    console.log(result ? `Deleted order: ${result._id}` : `Order not found: ${id}`);
  }
}

async function DeleteProductData(ids) {
  for (const id of ids) {
    console.log('Deleting product ' + id);
    const data = await Product.findById(id).lean();
    console.table([data]);
    const result = await Product.findByIdAndDelete(id);
    console.log(result ? `Deleted product: ${result._id}` : `Product not found: ${id}`);
  }
}

async function DeleteReviewData(ids) {
  for (const id of ids) {
    console.log('Deleting review ' + id);
    const data = await Review.findById(id).lean();
    console.table([data]);
    const result = await Review.findByIdAndDelete(id);
    console.log(result ? `Deleted review: ${result._id}` : `Review not found: ${id}`);
  }
}

async function DeleteUserData(ids) {
  for (const id of ids) {
    console.log('Deleting user ' + id);
    const data = await User.findById(id).lean();
    console.table([data]);
    const result = await User.findByIdAndDelete(id);
    console.log(result ? `Deleted user: ${result._id}` : `User not found: ${id}`);
  }
}

module.exports = {
  DeleteOrderData,
  DeleteProductData,
  DeleteReviewData,
  DeleteUserData
};
