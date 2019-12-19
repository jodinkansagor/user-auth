const Palette = require('../models/Palette');

describe('Palette model', () => {
  it.only('has a required brand', () => {
    const palette = new Palette({});

    const { errors } = palette.validateSync();
    expect(errors.brand.message).toEqual('Path `brand` is required.');
  });
});
