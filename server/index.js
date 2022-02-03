const express = require('express');
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:false}));
/////Routers
const {schema} = require('./graphql/schema');
const {rootValue} = require('./graphql/resolvers');
const {graphqlHTTP} = require('express-graphql');

app.use('/graphql',graphqlHTTP({schema,rootValue,graphiql:true}));
//////

const PORT = 5000;
app.listen(PORT,()=> console.log(`OPEN PORT ${PORT}`));