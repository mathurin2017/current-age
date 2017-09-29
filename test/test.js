'use strict';

var expect = require('chai').expect;
var getCurrentAge = require('../index');

describe('#getCurrentAge', function() {
    it('should convert single digits', function() {
        var result = getCurrentAge(1990);
        expect(result).to.equal(27);
    });

});