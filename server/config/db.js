const mongoose = require('mongoose');

const connectDB = async () =>{
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`mongoDb connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;