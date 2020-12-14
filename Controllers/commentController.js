const mongodb = require('mongodb');
const {auth} = require('../middlewares/VerifyToken');
const comment = require('../models/comments');
const { find } = require('../models/post');
const Post = require('../models/post');
const like = require('../models/like');

const post_comment =  (req,res) => {

 
    comment.create(req.body, async function (err, result) {
        if (err) return res.status(500).send('There was an error adding Job Application to Database.');

        let doc =  await  Post.findOneAndUpdate({_id:req.params.id}, {comments_amount :req.body.comments_amount},{ new: true });
        res.status(200).send('created succesfully ');
    });


    
}

const get_comment =  (req,res) => {

    
    comment.find({Post_id: req.params.id}, async function (err, comments) {
        if (err) return res.status(500).send("There was a problem getting applications.");
        if (!comments) return res.status(404).send("No comments found.");


        comments.reverse();
      
        res.status(200).send(comments);
    }).populate('userid');

    
}



const like_Post =  (req,res) => {


    like.findOneAndUpdate({Post_id: req.params.id,userid:req.body.userid},req.body ,{  new: true, upsert: true  }, async function (err, like) {
        if (err) return res.status(500).send("There was a problem getting applications.");
      
        if (!like) return res.status(404).send("No comments found.");



    
        res.status(200).send(like);
    });

    
}

const get_like =  (req,res) => {

    
    like.find({Post_id: req.params.id}, async function (err, comments) {
        if (err) return res.status(500).send("There was a problem getting applications.");
        if (!comments) return res.status(404).send("No like found.");



      
        res.status(200).send(comments);
    });

    
}





module.exports = {
   post_comment , get_comment , like_Post
}