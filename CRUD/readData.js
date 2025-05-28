const Order = require('../models/Order');
const Product = require('../models/Product');
const Review = require('../models/Review');
const User = require('../models/User');

async function ReadOrderData() {
  const data = await Order.find().lean();
  console.table(data);
}

async function ReadProductData() {
  const data = await Product.find().lean();
  console.table(data);
}

async function ReadReviewData() {
  const data = await Review.find().lean();
  console.table(data);
}

async function ReadUserData() {
  const data = await User.find().lean();
  console.table(data);
}

module.exports = {
  ReadOrderData,
  ReadProductData,
  ReadReviewData,
  ReadUserData
};
