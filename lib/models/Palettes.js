const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  brand: {
    type: String,
    required: true
  }, 
  paletteName: {
    type: String,
    required: true
  },
  numberOfPans: {
    type: Number,
    required: true
  },
  datePurchased: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Palette', schema);
