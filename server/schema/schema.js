const {projects, clients} = require("../sampleData.js")

const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList} = require("graphql")

const Project = require("../models/Project")
const Client = require("../models/Client")


//Client Type
const ClientType = new GraphQLObjectType({
    name:'Client',
    fields : () => ({
        id : {type:GraphQLID},
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        phone:{type:GraphQLString}
    })
})

//Project Type
const ProjectType = new GraphQLObjectType({
    name:'Project',
    fields : () => ({
        id : {type:GraphQLID},
        name:{type:GraphQLString},
        status:{type:GraphQLString},
        description:{type:GraphQLString},
        client:{
            type:ClientType,
            resolve(parent,args){
                return clients.find(client => client.id === parent.clientId )
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name:"RootQueryType",
    fields:{
        clients:{
           type: new GraphQLList(ClientType),
           resolve(parent ,args){
            return clients;
           }
        },
        client:{
            type:ClientType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return clients.find(client => client.id === args.id)
            }
        },
        projects:{
            type: new GraphQLList(ProjectType),
            resolve(parent ,args){
             return projects;
            }
         },
        project:{
            type:ProjectType,
            args:{id:{type:GraphQLID}},
            resolve(parent, args){
                return projects.find(project => project.id === args.id)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery
})