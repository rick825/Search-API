const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

ItemSchema.index({ name: 'text', description: 'text' });

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;