const express = require('express');
const router = express.Router();

const Resources = require('../Controllers/ResourceController');



router.get('/quotes',Resources.daily_quotes);
router.get('/news',Resources.daily_news);
router.get('/covid',Resources.covid);

module.exports = router;
