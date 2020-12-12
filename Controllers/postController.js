const mongodb = require('mongodb');
const {auth} = require('../middlewares/VerifyToken');
const Post = require('../models/post');

//post controller
const post_index =  (req,res,next) => {
   

    Post.find( {}, function (err, Posts) {
        if (err) return res.status(500).send({message: 'There was a problem getting jobs'});
        res.send(Posts);
    }).populate('comment');//.limit(max);
}
const userPosts =  (req,res,next) => {
    // // auth(req,res,next);    
    Post.find({userid: req.params.id}, function (err, applic) {
        if (err) return res.status(500).send("There was a problem getting applications.");
        if (!applic) return res.status(404).send("No applications found.");
        res.status(200).send(applic);
    });
    // Post.find( {}, function (err, Posts) {
    //     if (err) return res.status(500).send({message: 'There was a problem getting jobs'});
    //     res.send(Posts);
    // });//.limit(max);
}
const create =  (req,res,next) => {
    
   
    Post.create(req.body, function (err, result) {
        if (err) return res.status(500).send('There was an error adding Job Application to Database.');
        res.status(200).send('created succesfully');
    });

}




module.exports = {
    post_index, create, userPosts 
}