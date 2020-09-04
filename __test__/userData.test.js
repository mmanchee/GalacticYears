import { UserData } from './../src/js/userData.js';
import { TestScheduler } from 'jest';

describe('UserData', () => {

  test('Should correctly collect user data with constructor and make an object', () => {
    const user = new UserData("Mike", "Sept 21 1977", 81);
    expect(user.name).toEqual("Mike");
    expect(user.dob).toEqual("Sept 21 1977");
    expect(user.expAge).toEqual(81);
  })
})