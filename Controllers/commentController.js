const mongodb = require('mongodb');
const {auth} = require('../middlewares/VerifyToken');
const comment = require('../models/comments');
const { find } = require('../models/post');
const Post = require('../models/post');

const post_comment = (req,res) => {

    comment.create(req.body, function (err, result) {
        if (err) return res.status(500).send('There was an error adding Job Application to Database.');
        res.status(200).send('created succesfully '+result);
    });


    
}

const get_comment =  (req,res) => {

    
    comment.find({Post_id: req.params.id}, async function (err, comments) {
        if (err) return res.status(500).send("There was a problem getting applications.");
        if (!comments) return res.status(404).send("No comments found.");
        console.log(comments.length,'length')


         let doc =  await  Post.findOneAndUpdate({_id:req.params.id}, {comments_amount :comment.length});
        res.status(200).send(comments);
    }).populate('userid');

    
}




module.exports = {
   post_comment , get_comment
}