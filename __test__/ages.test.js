import { Ages } from './../src/js/ages.js';

describe('Ages', () => {

  test('Should correctly create an object with constructor', () => {
    const ages = new Ages();
    expect(ages.user).toEqual("");
    expect(ages.daysAlive).toEqual(0);
  })
})
describe('addUserData', () => {

  test('Should correctly add the userData object to ages object', () => {
    const ages = new Ages();
    ages.addUserData({name: "Mike", dob: "Sept 21 1977", expAge: 81});
    expect(ages.user).toEqual({name: "Mike", dob: "Sept 21 1977", expAge: 81});
  })
})