const express = require('express');

const router = express.Router();
const postController = require('../Controllers/postController');
const authRoute = require('../middlewares/VerifyToken');
//get posts

router.get('/',postController.post_index);





module.exports = router;

