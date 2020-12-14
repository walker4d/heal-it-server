const express = require('express');

const router = express.Router();
const commentController = require('../Controllers/commentController');
const postController = require('../Controllers/postController');
const authRoute = require('../middlewares/VerifyToken');
//get posts

router.get('/',postController.post_index);
router.get('/:id',postController.userPosts);

router.post('/create',postController.create);
router.post('/comment/:id',commentController.post_comment);
router.get('/comment/:id',commentController.get_comment);
router.put('/like/:id',commentController.like_Post);



module.exports = router;

