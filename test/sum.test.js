const expect = require('chai').expect;
const Calculate = require('../src/sum');

describe('Test class Calculate', () => {
  let calculate;
  beforeEach(() => {
    calculate = new Calculate();
  })
  it('should be success when i call function sum and declare value1 = 10, value2 = 15 ', () => {
    // arrange
    const value1 = 10;
    const value2 = 15;
    // act
    const total = calculate.sum(value1, value2);
    // assert
    expect(25).to.be.equal(total);
  });
});