const Users = require('../models/Users');
const Professors = require('../models/Professors');
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
        login:{type:GraphQLString},
        password:{type:GraphQLString},
        privilege:{type:GraphQLInt},
        confirmed:{type:GraphQLBoolean},
        fieldOfInterest:{type:GraphQLString}, 
    })
});

// create root query to grabe user by id
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        user:{
            type: UserType,
            args:{id: {type:GraphQLID}},
            resolve(parent,args){
                return Users.findById(args.id);
            }
        },
        users:{
            type: GraphQLList(UserType),
            resolve(parent,args){
                return Users.find({});
            }
        },
        professor:{
            type: ProfessorType,
            args:{id: {type:GraphQLID}},
            resolve(parent,args){
                return Professors.findById(args.id);
            }
        },
        professors:{
            type: GraphQLList(ProfessorType),
            resolve(parent,args){
                return Professors.find({});
            }
        }
    }
    }
);

// export as a schema
module.exports = new GraphQLSchema({
    query: RootQuery
});