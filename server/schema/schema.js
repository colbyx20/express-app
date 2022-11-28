const {Users} = require('../models/Users');
const {Professors} = require('../models/Professors');
const {GraphQLObjectType, GraphQLNonNull,GraphQLID, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLSchema, GraphQLList} = require('graphql'); // create a type of each object

//user type 
const UserType = new GraphQLObjectType({
    name: 'User',
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
    name: 'Professor',
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
        professors:{
            type: new GraphQLList(ProfessorType),
            resolve(parent,args){
                return Professors.find();
            }
        },
    }
});

// export as a schema
module.exports = new GraphQLSchema({
    query: RootQuery
});