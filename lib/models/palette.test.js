const Palette = require('../models/Palette');

describe('Palette model', () => {
  it('has a required brand', () => {
    const palette = new Palette({});

    const { errors } = palette.validateSync();
    expect(errors.brand.message).toEqual('Path `brand` is required.');
  });

  it('has a required paletteName', () => {
    const palette = new Palette({});

    const { errors } = palette.validateSync();
    expect(errors.paletteName.message).toEqual('Path `paletteName` is required.');
  });

  it('has a required numberOfPans', () => {
    const palette = new Palette({});

    const { errors } = palette.validateSync();
    expect(errors.numberOfPans.message).toEqual('Path `numberOfPans` is required.');
  });

  it('has a required datePurchased', () => {
    const palette = new Palette({});

    const { errors } = palette.validateSync();
    expect(errors.datePurchased.message).toEqual('Path `datePurchased` is required.');
  });
});
