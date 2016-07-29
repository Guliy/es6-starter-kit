import {assert} from 'chai';
import {describe, it} from 'mocha';
import {test} from '../src/index';

describe('Array', () => {

  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal(8, test());
    });

  });
});
