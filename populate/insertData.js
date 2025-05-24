const { set } = require('mongoose');
const Order = require('../models/Order');
const Product = require('../models/Product');
const Review = require('../models/Review');
const User = require('../models/User');


async function getExistingIds(model){
    const existingDocs = await model.find({}, '_id');
    return new Set(existingDocs.map(doc => doc._id));
};

async function InsertOrderData(orders) {
  const existingIds = await getExistingIds(Order);
  const newData = orders.filter(o => !existingIds.has(o._id));

  if (newData.length > 0) {
    await Order.insertMany(newData);
    console.log(`Added ${newData.length} orders`);
  } else {
    console.log('No new orders to be added');
  }
};

async function InsertProductData(products){
    const ExistingIds = await getExistingIds(Product);
    const newData = products.filter(p => !ExistingIds.has(p._id));

    if(newData.length > 0){
        await Product.insertMany(newData);
        console.log(`Added ${newData.length} products`);
    } else{
        console.log('No new products to be added')
    }
};

async function InsertReviewData(reviews) {
  const existingIds = await getExistingIds(Review);
  const newData = reviews.filter(r => !existingIds.has(r._id));

  if (newData.length > 0) {
    await Review.insertMany(newData);
    console.log(`Added ${newData.length} reviews`);
  } else {
    console.log('No new reviews to be added');
  }
};

async function InsertUserData(users){
    const ExistingIds = await getExistingIds(User);
    const newData = users.filter(u => !ExistingIds.has(u._id));

    if(newData.length > 0){
        await User.insertMany(newData);
        console.log(`Added ${newData.length} users`);
    } else{
        console.log('No new users to be added')
    }
};

module.exports = {
    InsertOrderData,
    InsertProductData,
    InsertReviewData,
    InsertUserData
}