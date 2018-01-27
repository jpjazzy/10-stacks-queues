'use strict';

const Nd = require('../lib/node');
require('jest');

describe('#Null case', () => {
  it('Should return an error', () => {
    expect(new Nd()).toBeInstanceOf(Error);
  });
});

describe('#Standard case', () => {
  it('Should a create new node with string value', () => {
    expect(new Nd('I HAVE THE POWERRRRRRR')).toEqual({'next': null, 'val': 'I HAVE THE POWERRRRRRR'});
  });
});

describe('#Standard case', () => {
  it('Should a create new node with array value', () => {
    expect(new Nd([1, 3, 3, 7])).toEqual({'next': null, 'val': [1, 3, 3, 7]});
  });
});