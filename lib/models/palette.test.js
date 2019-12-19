const Palette = require('../models/Palette');

describe('Palette model', () => {
  it.only('has a required brand', () => {
    const palette = new Palette({});

    const { errors } = palette.validateSync();
    expect(errors.brand.message).toEqual('Path `brand` is required.');
  });

  it.only('has a required paletteName', () => {
    const palette = new Palette({});

    const { errors } = palette.validateSync();
    expect(errors.paletteName.message).toEqual('Path `paletteName` is required.');
  });
});
