const express = require("express")
require('dotenv').config({path: './server/.env'})
const port = process.env.PORT || 5000
const {graphqlHTTP} = require("express-graphql")
const schema = require('./schema/schema')
const connectDB = require('./config/db.js')

const app = express()

//Connect database
connectDB()


app.use('/graphql', graphqlHTTP({
   schema,
   graphiql: process.env.NODE_ENV === "development"
}))

app.listen(port,console.log(`running on ${port}`))