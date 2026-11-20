import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';

const app = express();

app.use('/uploads', express.static(path.resolve('uploads')));

// CORS configuration
const corsOptions = {
    origin: process.env.ORIGIN_LOCAL,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

// Apply CORS before routes
app.use(cors(corsOptions));

// Parse JSON
app.use(express.json());

import db from './config/db.js';

import bodyParser from 'body-parser';
app.use(bodyParser.json());



app.get('/', (req, res) => {
  res.send('Hello World')
});

import menuRouter from './router/menuRouter.js';
app.use('/menus', menuRouter);


app.listen(3000, () => {
  console.log('Server is running on localhost')
});