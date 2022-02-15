import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();
const { PORT } = process.env;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/////Routers
import { schema } from "./graphql/schema";
import { rootValue } from "./graphql/resolvers";
import { graphqlHTTP } from "express-graphql";

app.use("/graphql", graphqlHTTP({ schema, rootValue, graphiql: true }));
//////

app.listen(PORT, () => console.log(`OPEN PORT ${PORT}`));
