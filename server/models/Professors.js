const mongoose = require('mongoose');

// creat a mongoose schema 
const ProfessorsSchema = new mongoose.Schema({
    firstname: {type:String},
    lastname: {type:String},
    email:{type: String},
    login:{type: String},
    password: {type: String},
    privilege: {type: Number},
    confirmed:{type: Boolean},
    fieldOfInterest:{type:String},
    schedule:{type: Array}
    // look at 48 minutes to reference an ID from another collection

});

module.exports = mongoose.model('Professor',ProfessorsSchema);