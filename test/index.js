'use strict';

var test = require('tape');
var debug = require('object-inspect');
var forEach = require('for-each');

var whichCollection = require('..');

test('non-collections', function (t) {
	forEach([
		null,
		undefined,
		true,
		false,
		42,
		0,
		-0,
		NaN,
		Infinity,
		'',
		'foo',
		/a/g,
		[],
		{},
		function () {}
	], function (nonCollection) {
		t.equal(whichCollection(nonCollection), false, debug(nonCollection) + ' is not a collection');
	});

	t.end();
});

test('Maps', { skip: typeof Map !== 'function' }, function (t) {
	var m = new Map();
	t.equal(whichCollection(m), 'Map', debug(m) + ' is a Map');

	t.end();
});

test('Sets', { skip: typeof Set !== 'function' }, function (t) {
	var s = new Set();
	t.equal(whichCollection(s), 'Set', debug(s) + ' is a Set');

	t.end();
});

test('WeakMaps', { skip: typeof WeakMap !== 'function' }, function (t) {
	var wm = new WeakMap();
	t.equal(whichCollection(wm), 'WeakMap', debug(wm) + ' is a WeakMap');

	t.end();
});

test('WeakSets', { skip: typeof WeakSet !== 'function' }, function (t) {
	var ws = new WeakSet();
	t.equal(whichCollection(ws), 'WeakSet', debug(ws) + ' is a WeakSet');

	t.end();
});
