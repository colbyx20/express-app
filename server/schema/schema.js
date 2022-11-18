//const {users,professors} = require('../sampleData.js'); // bring int mock data 
const Professors = require('../models/Professors');
const Users = require('../models/Users');
const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLSchema, GraphQLList, buildClientSchema} = require('graphql'); // create a type of each object

//user type 
const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: {type:GraphQLID},
        firstname: {type:GraphQLString},
        lastname: {type: GraphQLString},
        email:{type:GraphQLString},
        privilege:{type:GraphQLInt},
        confirmation:{type:GraphQLBoolean},
        group: {type:GraphQLString}
    })
});

const ProfessorType = new GraphQLObjectType({
    name: "Professor",
    fields: () => ({
        id: {type:GraphQLID},
        firstname: {type:GraphQLString},
        lastname: {type: GraphQLString},
        email:{type:GraphQLString},
        privilege:{type:GraphQLInt},
        fieldOfInterest:{type:GraphQLString},
        // adding relationships
        appointments: { type:[GraphQLString]
            // type:UserType,
            // resolve(parent,args){
            //    return Users.findById(parent.)
            // }
        } 
        
    })
});

// create root query to grabe user by id
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        users:{
            type: new GraphQLList(UserType),
            resolve(parent,args){
                return Users.find();
            }
        },
        user:{
            type:UserType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return Users.findById(args.id);
            }
        },
        professors:{
            type: new GraphQLList(ProfessorType),
            resolve(parent,args){
                return Professors.find();
            }
        },
        professor:{
            type:ProfessorType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return Professors.findById(args.id);
            }
        }
    }
});

// export as a schema
module.exports = new GraphQLSchema({
    query: RootQuery
});