'use strict';

const Queue = require('../lib/queue');
require('jest');

describe('Queue Data Structure Module', function () {
  beforeEach(() => this.Queue = new Queue());

  describe('default properties', () => {
    it('should create a new instance of a Queue', () => {
      expect(this.Queue).toBeInstanceOf(Queue);
    });
    it('should have a default val of null assigned to the top property', () => {
      expect(this.Queue.top).toBeNull();
    });
    it('should have a default val of 0 assigned to the size property', () => {
      expect(this.Queue.size).toEqual(0);
    });
    it('should have a maxSize property with a default val of 1337', () => {
      expect(this.Queue.maxSize).toEqual(1337);
    });
  });
  describe('#enqueue', () => {
    it('should have a size of 20', () => {
      [...Array(20)].map((e, i) => this.Queue.enqueue(~~(Math.random() * i)));
      expect(this.Queue.size).toEqual(20);
    });
    it('should add a new node with the val of 1 to the bottom of the Queue', () => {
      this.Queue.enqueue(1);
      expect(this.Queue.top.val).toEqual(1);
    });
    it('throw an error when maxSize is met', () => {
      expect(() => {
        [...Array(1338)].map((e, i) => this.Queue.enqueue(~~(Math.random() * i)));
      }).toThrow();
    });
  });
  describe('#pop', () => {
    it('should remove the top node from the Queue', () => {
      this.Queue.enqueue(1);
      expect(this.Queue.top.val).toEqual(1);
      expect(this.Queue.dequeue().val).toEqual(1);

    });
  });
  describe('#peek', () => {
    it('should return the top of the Queue', () => {
      expect(this.Queue.top).toBeNull();
      this.Queue.enqueue(1);
      expect(this.Queue.peek().val).toEqual(1);
    });
  });
});