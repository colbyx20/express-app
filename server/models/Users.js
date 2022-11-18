const mongoose = require('mongoose');

// creat a mongoose schema 
const UsersSchema = new mongoose.Schema({
    firstname: {type:String},
    lastname: {type:String},
    email:{type: String},
    login:{type: String},
    password: {type: String},
    privilege: {type: Number},
    confirmed:{type: Boolean},
    group: {type: String}

});

module.exports = mongoose.model('Users',UsersSchema);