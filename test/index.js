var flyd = require('flyd');
var stream = flyd.stream;
var skip = require('../index');
var assert = require('assert');

describe('skip', function() {
    it('skips first 3 values', function() {
        var result = [];
        var source = stream();
        var s = skip(3, source);
        flyd.map(function(v) { result.push(v); }, s);
        source(1)(2)(3)(4)(5)(6);
        assert.deepEqual(result, [4, 5, 6]);
    });
});
