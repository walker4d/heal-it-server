const mongodb = require('mongodb');
const {auth} = require('../middlewares/VerifyToken');
const Post = require('../models/post');
const like = require('../models/like');

//post controller
const post_index =  (req,res,next) => {
   
var Blogs =[];
var Likes = [];
 
    Post.find( {}, async function (err, Posts) {
        if (err) return res.status(500).send({message: 'There was a problem getting jobs'});
      
        // if(!Posts) return res.status(500)
        
        Likes = await like.find({}, );
       
        for(var i = 0; i < Posts.length; i++){
         
            var l =[];
            l = Likes.filter(like => like.Post_id ==  Posts[i]._id );
            Posts[i].likes  = l.filter(like => like.type == 'like' );
            Posts[i].dislikes  = l.filter(like => like.type == 'dislike' );
            l = l.filter(like => like.isliked  != false );
            Posts[i].Likes = [...l];
         
     
        }
       
        Posts.reverse();
        res.send(Posts);
    });
}
const userPosts =  (req,res,next) => {
var Likes = [];
     
    Post.find({userid: req.params.id}, async function (err, Posts) {
        if (err) return res.status(500).send("There was a problem getting applications.");
        if (!Posts) return res.status(404).send("No applications found.");
  
        
        Likes = await like.find({}, );

        for(var i = 0; i < Posts.length; i++){
         
            var l =[];
            l = Likes.filter(like => like.Post_id ==  Posts[i]._id );
            Posts[i].likes  = l.filter(like => like.type == 'like' );
            Posts[i].dislikes  = l.filter(like => like.type == 'dislike' );
            l = l.filter(like => like.isliked  != false );
            Posts[i].Likes = [...l];
         
     
        }
       
        Posts.reverse();

        res.status(200).send(Posts);
    });
  
}
const create =  (req,res,next) => {
    
   
    Post.create(req.body, function (err, result) {
        if (err) return res.status(500).send('There was an error adding Job Application to Database.');
        res.status(200).send('created succesfully');
    });

}

const Update =  (req,res,next) => {
    
   
    Post.create(req.body, function (err, result) {
        if (err) return res.status(500).send('There was an error adding Job Application to Database.');
        res.status(200).send('created succesfully');
    });

}


const Delete =  (req,res,next) => {
    
   
    Post.create(req.body, function (err, result) {
        if (err) return res.status(500).send('There was an error adding Job Application to Database.');
        res.status(200).send('created succesfully');
    });

}

const getFavurite =  (req,res,next) => {
    
   
    Post.create(req.body, function (err, result) {
        if (err) return res.status(500).send('There was an error adding Job Application to Database.');
        res.status(200).send('created succesfully');
    });

}



const addFavurite =  (req,res,next) => {
    
   
    Post.create(req.body, function (err, result) {
        if (err) return res.status(500).send('There was an error adding Job Application to Database.');
        res.status(200).send('created succesfully');
    });

}



 


module.exports = {
    post_index, create, userPosts 
}