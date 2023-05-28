const { Orders } = require('../models/orderModel');

const addOrder = async (req, res) => {
  const newOrder = await Orders.create(req.body);

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result: newOrder,
    },
  });
};

module.exports = { addOrder };
