const mongoose = require('mongoose');

let likeSchema = new mongoose.Schema({
   
    Post_id: String,
    userid:String,      
    type:String,
    isliked:Boolean,
    created_ts: {
        type: Date,
        default: new Date()
    },

    updated_ts: Date
});


const like = mongoose.model('like', likeSchema);

module.exports = like;