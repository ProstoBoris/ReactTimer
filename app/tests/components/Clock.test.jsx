var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
    it('should exist', () => {
        expect(Clock).toExist();
    });
});

describe('formatSeconds', () => {
   it('should format seconds with leading zeros', () => {
       var clock = TestUtils.renderIntoDocument(<Clock/>);
       var seconds = 62;
       var expected = '01:02';
       var actual = clock.formatSeconds(seconds);

       expect(actual).toBe(expected);
   }) ;
});