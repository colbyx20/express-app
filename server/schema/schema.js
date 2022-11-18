const {users,professors} = require('../sampleData.js'); // bring int mock data 
const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLSchema} = require('graphql'); // create a type of each object

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

// create root query to grabe user by id
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        user:{
            type:UserType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return users.find(users => users.id === args.id);
            }
        }
    }
});

// export as a schema
module.exports = new GraphQLSchema({
    query: RootQuery
});