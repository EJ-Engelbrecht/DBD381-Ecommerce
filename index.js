require('dotenv').config();
const mongoose = require('mongoose');

const {
    InsertOrderData,
    InsertProductData,
    InsertReviewData,
    InsertUserData
} = require('./CRUD/insertData');
const {
    ReadOrderData,
    ReadProductData,
    ReadReviewData,
    ReadUserData
} = require('./CRUD/readData');

const {
    UpdateOrderData,
    UpdateProductData,
    UpdateReviewData,
    UpdateUserData
} = require('./CRUD/updateData');

const {
    DeleteOrderData,
    DeleteProductData,
    DeleteReviewData,
    DeleteUserData
} = require('./CRUD/deleteData');



const orderData = require('./data/orderdata');
const productData = require('./data/productdata');
const reviewData = require('./data/reviewdata');
const userData = require('./data/userdata');

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;


(async function initializeDatabase(){
    try {
    await mongoose.connect(uri, {
        dbName: "ecommerce" 
    });
        console.log(`Connected to MongoDB: ${dbName}`);

        // INSERT
        await InsertOrderData(orderData);
        await InsertProductData(productData);
        await InsertReviewData(reviewData);
        await InsertUserData(userData);
        console.log('-------------------------------------------------------------------------------------------------------------------------')
        // READ
        await ReadOrderData();
        await ReadProductData();
        await ReadReviewData();
        await ReadUserData();
        console.log('-------------------------------------------------------------------------------------------------------------------------')
        
        // UPDATE (as example)
        await UpdateProductData([{ _id: productData[0]._id, price: 999 }]);
        console.log('-------------------------------------------------------------------------------------------------------------------------')
        
        // DELETE (as example)
        await DeleteReviewData([reviewData[0]._id]);
        console.log('-------------------------------------------------------------------------------------------------------------------------')
        

        console.log("All operations completed successfully")
    } catch (error) {
        console.log("Database couldn't connect: " + error)
    }finally{
        await mongoose.disconnect();
        console.log("Disconnected from MongoDB");
        
    }
})();

