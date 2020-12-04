const mongoose = require('mongoose');

const Schema = mongoose.Schema;
let CommentSchema = new mongoose.Schema({
    userid: { type: Schema.Types.ObjectId, ref: 'User' },
    Post_id: String,
    message:String,      
    Reply:Array,
    created_ts: {
        type: Date,
        default: new Date()
    },

    updated_ts: Date
});

// CommentSchema.virtual('user', {
//     ref: 'User',
//     localField: 'userid',
//     foreignField: '_id',
//     justOne: true
// });

// JobApplicationsSchema.virtual('user', {
//     ref: 'users',
//     localField: 'applicant_id',
//     foreignField: '_id',
//     justOne: true
// });

const comment = mongoose.model('comment', CommentSchema);

module.exports = comment;