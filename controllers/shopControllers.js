const { Shops } = require('../models/shopModel');

const getShops = async (req, res) => {
  const shops = await Shops.find({});
  res.json({
    status: 'success',
    code: 200,
    data: {
      shops,
    },
  });
};

module.exports = { getShops };
