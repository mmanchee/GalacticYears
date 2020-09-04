import { Ages } from './../src/js/ages.js';

describe('Ages', () => {

  test('Should correctly create an object with constructor', () => {
    const ages = new Ages();
    expect(ages.user).toEqual("");
    expect(ages.daysAlive).toEqual(0);
  })
})