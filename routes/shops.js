const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/shopControllers');
const ctrlWrapper = require('../middlewares/ctrlWrapper');

router.get('/', ctrlWrapper(ctrl.getShops));

module.exports = router;
