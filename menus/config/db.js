import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoUrl = process.env.MONGOURL_LOCAL;
//const mongoUrl = process.env.MONGODB_URI;


mongoose.connect(mongoUrl)
.then( async () => {
    console.log("Database connected ");

    await mongoose.connection.db.collection('test').insertOne({
        message: "Database Successfully insert",
        date: new Date()
    });

    console.log("Database Successfully insert");

}).catch(() => {
    console.log("Database does not connected");
});

const db = mongoose.connection;

db.on('disconnected', () => {
    console.log("Database disconnected");
});

export default db;