const { Schema, model } = require('mongoose');

const contactsShema = Schema({
  name: {
    type: String,
    required: [true, 'Set name for shop'],
  },
  company: {
    type: String,
  },
  adress: {
    type: String,
  },
  food: {
    type: [{ name: String, price: Number, picture: String }],
  },
});

const Shops = model('shop', contactsShema);

module.exports = { Shops };
