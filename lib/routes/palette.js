const { Router } = require('express');
const Palette = require('../models/Palette');

module.exports = Router()

  .post('/', (req, res, next) => {
    Palette
      .create(req.body);
  })