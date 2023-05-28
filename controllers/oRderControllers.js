const { Orders } = require('../models/orderModel');

// const addOrder = async (req, res) => {
//   const newOrder = await Orders.create(req.body);
//   console.log(req);

//   res.status(201).json({
//     status: 'success',
//     code: 201,
//     data: {
//       result: newOrder,
//     },
//   });
// };

const addOrder = async (req, res, next) => {
  const order = new Orders(req.body);

  await order.save();

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result: newOrder,
    },
  });
};

module.exports = { addOrder };
