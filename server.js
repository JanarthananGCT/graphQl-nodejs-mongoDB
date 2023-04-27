const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server");
const schema = require("./graphQLSchema");

const server = new ApolloServer({
  typeDefs: schema.typeDefs,
  resolvers: schema.resolvers,
});

server
  .listen({ port: 5000 })
  .then(({ url }) => console.log(`Server running at ${url}`));
