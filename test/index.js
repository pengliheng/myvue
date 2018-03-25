const assert = require('assert');

describe('Array', () => {
  describe('RegExp test', () => {
    it('RegExp test', () => {
      const log = console.log;
      const x = 7;
      const obj = {
        prop1: 1979,
        prop2: 'Alice',
        x,
        prop3() {
          log('call prop3');
        },
        get props4() {
          return this.prop1 * 2;
        },
        set props4(val) {
          log('success set');
          this.prop11 = val;
        },
      };
      obj.prop3();
      log(obj.x);
      log(obj.props4);
      obj.prop4 = 5;
      log(obj.props4);

      // console.log(obj);
      // assert.equal(
      //   0.1 + 0.2,
      //   0.30000000000000004,
      // );
    });
  });
});
