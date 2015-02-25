import assert from 'assert';
import typeOf from './';


it('fj-typeof', () => {
  assert.equal(typeof typeOf, 'function');
  assert(typeOf('function', typeOf));
  assert(typeOf('string')('foo'));
  assert(typeOf('object')({}));
  assert(typeOf('undefined')(undefined));
});
