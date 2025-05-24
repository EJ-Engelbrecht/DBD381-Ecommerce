const mongoose = require('mongoose');

const {
    InsertOrderData,
    InsertProductData,
    InsertReviewData,
    InsertUserData
} = require('./populate/insertData');

const orderData = require('./data/orderdata');
const productData = require('./data/productdata');
const reviewData = require('./data/reviewdata');
const userData = require('./data/userdata');

const dbName = "ecommerce";
const uri = 'mongodb+srv://EJE:NYfdm93T71qvt1RG@dbd381-db.whlkqbu.mongodb.net/';

(async function initializeDatabase(){
    try {
    await mongoose.connect(uri, {
        dbName: "ecommerce" 
    });


        console.log(`Connected to MongoDB: ${dbName}`);

        await InsertOrderData(orderData);
        await InsertProductData(productData);
        await InsertReviewData(reviewData);
        await InsertUserData(userData);
        
        console.log("All data added successfully")
    } catch (error) {
        console.log("Database couldn't connect: " + error)
    }finally{
        await mongoose.disconnect();
        console.log("Disconnected from MongoDB");
        
    }
})();

