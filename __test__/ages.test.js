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
    ages.addUserData({name: "Mike", dob: "09/21/1977", expAge: 81});
    expect(ages.user).toEqual({name: "Mike", dob: "09/21/1977", expAge: 81});
  })
})
describe('addDaysAlive', () => {

  test('Should correctly calculate the days alive and add to ages object', () => {
    const ages = new Ages();
    ages.user = {name: "Mike", dob: "09/21/1977", expAge: 81};
    ages.addDaysAlive();
    expect(ages.daysAlive).toEqual(15689); // test will fail every other day except Sept 4th 2020, must add days from that date too pass
  })
})
describe('mercuryYear', () => {

  test('Should correctly add the mercuryYear to ages object', () => {
    const ages = new Ages();
    ages.daysAlive = 15689;
    ages.mercuryYear();
    expect(ages.mercury).toEqual([178, 25]);
  })
})
describe('venusYear', () => {

  test('Should correctly add the venusYear to ages object', () => {
    const ages = new Ages();
    ages.daysAlive = 15689;
    ages.venusYear();
    expect(ages.venus).toEqual([627, 14]);
  })
})
describe('earthYear', () => {

  test('Should correctly add the earthYear to ages object', () => {
    const ages = new Ages();
    ages.daysAlive = 15689;
    ages.earthYear();
    expect(ages.venus).toEqual([42, 348]);
  })
})
