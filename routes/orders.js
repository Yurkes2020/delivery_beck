const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/oRderControllers');
const ctrlWrapper = require('../middlewares/ctrlWrapper');

router.post('/cart', ctrlWrapper(ctrl.newOrder));

module.exports = router;
