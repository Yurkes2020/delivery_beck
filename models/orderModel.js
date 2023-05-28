const { Schema, model } = require('mongoose');

const orderShema = Schema({
  info: {
    name: String,
    email: String,
    phone: String,
    address: String,
  },
  data: {
    company: String,
    address: String,
    address: {
      type: [{ name: String, price: Number, picture: String, count: String }],
    },
  },
  total: {
    type: Number,
  },
});

const Orders = model('order', orderShema);

module.exports = { Orders };
