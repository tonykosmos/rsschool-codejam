const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('d:/Git/rsschool-codejam/sumOfOther');
describe('Array', () => {
    it('1', () => {
      const count = sumOfOther([2, 3, 1]);
      assert.deepEqual(count, [4, 3, 5]);
    });
   
    it('2', () => {
        const count = sumOfOther([3, 4, 7]);
        assert.deepEqual(count, [11, 10, 7]);
      });
      it('3', () => {
        const count = sumOfOther([0, 4, 2]);
        assert.deepEqual(count, [6, 2, 4]);
      });
      it('4', () => {
        const count = sumOfOther([8, 3, 1]);
        assert.deepEqual(count, [4, 9, 11]);
      });
      it('1', () => {
        const count = sumOfOther([5, 8, 1]);
        assert.deepEqual(count, [9, 6, 13]);
      }); 
    
  
});