const mongodb = require('mongodb');
const {auth} = require('../middlewares/VerifyToken');

//post controller
const post_index =  (req,res,next) => {
    auth(req,res,next);    
    res.send('hello world');


}


module.exports = {
    post_index
}