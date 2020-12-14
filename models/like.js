const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let likeSchema = new mongoose.Schema({
   
    Post_id: String,
    userid: { type: Schema.Types.ObjectId, ref: 'User' },
   
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