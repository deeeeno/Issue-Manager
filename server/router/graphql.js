const {schema} = require('../graphql/schema');
const {resolvers} = require('../graphql/resolvers');
const {graphqlHTTP} = require('express-graphql');

export default graphqlHTTP({schema,resolvers,graphiql:true});