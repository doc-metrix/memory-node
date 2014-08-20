
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Metrics specification:
	METRICS = require( './../specs/memory.json' ),

	// Module to be tested:
	metrics = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'doc-metrix-memory', function tests() {
	'use strict';

	// SETUP //

	var NAMES = Object.keys( METRICS );


	// TESTS //

	it( 'should export an object', function test() {
		expect( metrics ).to.be.an( 'object' );
	});

	describe( 'list', function tests() {

		it( 'should provide a method to list all documented metrics', function test() {
			expect( metrics.list ).to.be.a( 'function' );
		});

		it( 'should list all documented metrics', function test() {
			assert.deepEqual( metrics.list(), NAMES );
		});

	});

	describe( 'exists', function tests() {

		it( 'should provide a method to check the existence of a metric specification', function test() {
			expect( metrics.exists ).to.be.a( 'function' );
		});

		it( 'should not allow a non-string metric name', function test() {
			var values = [
					5,
					[],
					{},
					true,
					null,
					undefined,
					NaN,
					function(){}
				];

			for ( var i = 0; i < values.length; i++ ) {
				expect( badValue( values[i] ) ).to.throw( Error );
			}

			function badValue( value ) {
				return function() {
					metrics.exists( value );
				};
			}
		});

		it( 'should return false for a metric which does not have a specification', function test() {
			assert.notOk( metrics.exists( 'cpu.utilization' ) );
		});

		it( 'should return true for a metric which has a specification', function test() {
			assert.ok( metrics.exists( NAMES[0] ), true );
		});

	});

	describe( 'get', function tests() {

		it( 'should provide a method to get a metric specification', function test() {
			expect( metrics.get ).to.be.a( 'function' );
		});

		it( 'should not allow a non-string metric name', function test() {
			var values = [
					5,
					[],
					{},
					true,
					null,
					undefined,
					NaN,
					function(){}
				];

			for ( var i = 0; i < values.length; i++ ) {
				expect( badValue( values[i] ) ).to.throw( Error );
			}

			function badValue( value ) {
				return function() {
					metrics.get( value );
				};
			}
		});

		it( 'should return null for a metric which does not have a specification', function test() {
			assert.isNull( metrics.get( 'cpu.utilization' ) );
		});

		it( 'should return a metric specification', function test() {
			assert.deepEqual( metrics.get( NAMES[0] ), METRICS[ NAMES[0] ] );
		});

	});

	describe( 'source', function tests() {

		it( 'should do something' );

	});

});