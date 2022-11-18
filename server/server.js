const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5000; // look in environment variable for port 
const app = express();
const{graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');

//this is our 1 endpoint
// app.use('/graphql',graphqlHTTP({
//     schema,
//     graphiql: process.env.NODE_ENV === 'development',
// }))

app.listen(port,console.log(`server running on port ${port}`));