import { Ages } from './../src/js/ages.js';

describe('Ages', () => {

  test('Should correctly create an object with constructor', () => {
    const ages = new Ages();
    expect(ages.user).toEqual({});
    expect(ages.days).toEqual({});
    expect(ages.date).toEqual({});
    expect(ages.planets).toEqual({mercury: 88, venus: 25, earth: 365.25, mars: 687, jupiter: 4333, saturn: 10759});
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
    expect(ages.days.alive).toEqual(15689); // test will fail every other day except Sept 4th 2020, must add days from that date too pass
  })
})
describe('mercuryYear', () => {

  test('Should correctly add the mercuryYear to ages object', () => {
    const ages = new Ages();
    ages.days.alive = 15689;
    ages.mercuryYear();
    expect(ages.mercury).toEqual([178, 25]);
  })
})
describe('venusYear', () => {

  test('Should correctly add the venusYear to ages object', () => {
    const ages = new Ages();
    ages.days.alive = 15689;
    ages.venusYear();
    expect(ages.venus).toEqual([627, 14]);
  })
})
describe('earthYear', () => {

  test('Should correctly add the earthYear to ages object', () => {
    const ages = new Ages();
    ages.days.alive = 15689;
    ages.earthYear();
    expect(ages.earth).toEqual([42, 348]);
  })
})
describe('marsYear', () => {

  test('Should correctly add the marsYear to ages object', () => {
    const ages = new Ages();
    ages.days.alive = 15689;
    ages.marsYear();
    expect(ages.mars).toEqual([22, 575]);
  })
})
describe('jupiterYear', () => {

  test('Should correctly add the jupiterYear to ages object', () => {
    const ages = new Ages();
    ages.days.alive = 15689;
    ages.jupiterYear();
    expect(ages.jupiter).toEqual([3, 2690]);
  })
})
describe('saturnYear', () => {

  test('Should correctly add the saturnYear to ages object', () => {
    const ages = new Ages();
    ages.days.alive = 15689;
    ages.saturnYear();
    expect(ages.saturn).toEqual([1, 4930]);
  })
})
describe('expectancy', () => {

  test('Should correctly add the daysLeft and expInDays to ages object', () => {
    const ages = new Ages();
    ages.days.alive = 15689;
    ages.user = {name: "Mike", dob: "09/21/1977", expAge: 81};
    ages.expectancy();
    expect(ages.days.left).toEqual(13896);
    expect(ages.days.total).toEqual(29585);
  })
})
describe('planetYear', () => {

  let result = "<p> mercury has 88 days in one cycle. <br> For you; <br>alive: 178 years and 25 days<br>total: 336 years and 17 days<br>left: 157 years and 80 days<br><p> venus has 25 days in one cycle. <br> For you; <br>alive: 627 years and 14 days<br>total: 1183 years and 10 days<br>left: 555 years and 21 days<br><p> earth has 365.25 days in one cycle. <br> For you; <br>alive: 42 years and 348 days<br>total: 80 years and 365 days<br>left: 38 years and 16 days<br><p> mars has 687 days in one cycle. <br> For you; <br>alive: 22 years and 575 days<br>total: 43 years and 44 days<br>left: 20 years and 156 days<br><p> jupiter has 4333 days in one cycle. <br> For you; <br>alive: 3 years and 2690 days<br>total: 6 years and 3587 days<br>left: 3 years and 897 days<br><p> saturn has 10759 days in one cycle. <br> For you; <br>alive: 1 years and 4930 days<br>total: 2 years and 8067 days<br>left: 1 years and 3137 days<br>"

  let result2 = "<p> mercury has 88 days in one cycle. <br> For you; <br>alive: 414 years and 75 days<br>total: 336 years and 16 days<br>Congratulations, you are 79 and 60 days over your expectancy!<p> venus has 25 days in one cycle. <br> For you; <br>alive: 1460 years and 7 days<br>total: 1183 years and 9 days<br>Congratulations, you are 277 and 24 days over your expectancy!<p> earth has 365.25 days in one cycle. <br> For you; <br>alive: 99 years and 348 days<br>total: 80 years and 364 days<br>Congratulations, you are 19 and 349 days over your expectancy!<p> mars has 687 days in one cycle. <br> For you; <br>alive: 53 years and 96 days<br>total: 43 years and 43 days<br>Congratulations, you are 11 and 54 days over your expectancy!<p> jupiter has 4333 days in one cycle. <br> For you; <br>alive: 8 years and 1843 days<br>total: 6 years and 3586 days<br>Congratulations, you are 2 and 2591 days over your expectancy!<p> saturn has 10759 days in one cycle. <br> For you; <br>alive: 3 years and 4230 days<br>total: 2 years and 8066 days<br>Congratulations, you are 1 and 6924 days over your expectancy!"

  test('should correctly report back all information in HTML', () => {
    const ages = new Ages();
    ages.days = {alive: 15689, total: 29585, left: 13896};
    ages.planets = {mercury: 88, venus: 25, earth: 365.25, mars: 687, jupiter: 4333, saturn: 10759};
    let text = ages.planetYear();
    expect(text).toEqual(result);
  })
  test('should correctly report back all information in HTML if over expectancy date', () => {
    const ages = new Ages();
    ages.days = {alive: 15689, total: 29585, left: 13896};
    ages.planets = {mercury: 88, venus: 25, earth: 365.25, mars: 687, jupiter: 4333, saturn: 10759};
    let text = ages.planetYear();
    expect(text).toEqual(result2);
  })
})