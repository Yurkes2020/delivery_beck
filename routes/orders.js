const express = require('express');
const router = express.Router();
const { addOrder } = require('../controllers/oRderControllers');
const ctrlWrapper = require('../middlewares/ctrlWrapper');

router.post('/', ctrlWrapper(addOrder));

module.exports = router;
