const express = require('express');
const router = express.Router();
const Item = require('../models/models');


router.get('/getItems', async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get('/search', async (req, res) => {
  try {
    const { query } = req.query;
    const items = await Item.find({ $text: { $search: query } });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post('/api/items', async (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).json({ message: 'Name and description are required' });
  }

  const newItem = new Item({
    name,
    description,
  });

  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
