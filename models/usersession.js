const Mongoose  = require("mongoose");

const Schema = Mongoose.Schema;

//schema to define the model
const UserSessionSchema = new Schema({

userId:{

    type:Number,
    default:-1
},
timestamp:{
    type:Data,
    default:Date.now()
},
isDeleted:{
type:Boolean,
default:false


}
});
//model inteface to communicate with the database

const users = Mongoose.model('UserSession',UserSessionSchema);
module.exports = users;