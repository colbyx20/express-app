const express = require('express');
const colors = require('colors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000; // look in environment variable for port 

const app = express();

connectDB();

//this is our 1 endpoint
app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: process.env.NODE_ENV === 'development',
    })
);

app.listen(port,console.log(`server running on port ${port}`));