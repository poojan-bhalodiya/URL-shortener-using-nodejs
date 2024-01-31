const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController');

router.get('/:shortUrl', urlController.redirectToOriginalUrl);
router.post('/short', urlController.shortenUrl);

module.exports = router;
