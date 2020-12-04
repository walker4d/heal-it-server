const Mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = Mongoose.Schema;

//schema to define the model
const PostSchema = new Schema(
  {
    userid: String,
    Title: String,
    Description: String,
    image: String,
    Tags: Array,
    Author:String,
    likes:String,
    dislikes:String,
    comments_amount:String,
 
       
    created_ts: {
      type: Date,
      default: new Date(),
    },
    updated_ts: Date,
  },
  { timestamps: true }
);

PostSchema.virtual('comment', {
    ref: 'comments',
    localField: 'comments_id',
    foreignField: '_id',
    justOne: true
});
module.exports = Mongoose.model("Post", PostSchema);
