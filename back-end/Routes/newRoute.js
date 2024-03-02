const express = require('express')
const router = express.Router();
const newsController = require('../controllers/newsController');

// GETTING NEWS FROM OPEN API;
router.get('/news', newsController.getNews);
router.post('/search', newsController.searchNews);



module.exports = router;