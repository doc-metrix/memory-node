
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),
	_ = require( 'underscore' ),

	// Metrics specification:
	METRICS = require( './../specs/memory.json' ),

	// Module to be tested:
	metrics = require( './../lib' ),

	// Metric specifications by device:
	DEVICES = {};

_.each( METRICS, function( metric, metricName ) {
    if ( metric.device !== null ) {
        _.each( metric.device, function( device ) {
            DEVICES[ device ] = ( DEVICES[ device ] ? DEVICES[ device ] : {} );
            DEVICES[ device ] [ metricName ] = metric;
        } );
    }
} );

// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'doc-metrix-memory', function tests() {
	'use strict';

	// SETUP //

	var NAMES = Object.keys( METRICS ),
		DEVICENAMES = Object.keys( DEVICES );


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
			assert.notOk( metrics.exists( 'invalid.classification.utilization' ) );
		});

		it( 'should return true for a metric which has a specification', function test() {
			assert.ok( metrics.exists( NAMES[0] ), true );
		});

		it( 'should return true for a metric which has a specification regardless of input name case sensitivity', function test() {
			assert.ok( metrics.exists( NAMES[0].toUpperCase() ), true );
		});

	});

	describe( 'get', function tests() {

		it( 'should provide a method to get a metric specification', function test() {
			expect( metrics.get ).to.be.a( 'function' );
		});

		it( 'should not allow a non-undefined or non-string metric name', function test() {
			var values = [
					5,
					[],
					{},
					true,
					null,
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
			assert.isNull( metrics.get( 'invalid.classification.utilization' ) );
		});

		it( 'should return a metric specification', function test() {
			assert.deepEqual( metrics.get( NAMES[0] ), METRICS[ NAMES[0] ] );
		});

		it( 'should return all metric specifications if called without a metric name', function test() {
			assert.deepEqual( metrics.get(), METRICS );
		});

		it( 'should return a metric specification regardless of input name case sensitivity', function test() {
			assert.deepEqual( metrics.get( NAMES[0].toUpperCase() ), METRICS[ NAMES[0] ] );
		});

	});

	describe( 'source', function tests() {

		it( 'should do something' );

	});

	describe( 'listDevices', function tests() {

		it( 'should provide a method to list all devices associated with the metrics', function test() {
			expect( metrics.listDevices ).to.be.a( 'function' );
		});

		it( 'should list all devices associated with the metrics', function test() {
			assert.deepEqual( metrics.listDevices(), DEVICENAMES );
		});

	});

	describe( 'getDevice', function tests() {

		it( 'should provide a method to get metric specifications associated with a device', function test() {
			expect( metrics.getDevice ).to.be.a( 'function' );
		});

		it( 'should not allow a non-undefined or non-string metric name', function test() {
			var values = [
					5,
					[],
					{},
					true,
					null,
					NaN,
					function(){}
				];

			for ( var i = 0; i < values.length; i++ ) {
				expect( badValue( values[i] ) ).to.throw( Error );
			}

			function badValue( value ) {
				return function() {
					metrics.getDevice( value );
				};
			}
		});

		it( 'should return null for a device which does not have any associated metric specification', function test() {
			assert.isNull( metrics.getDevice( 'no such device' ) );
		});

		it( 'should return metric specification(s) associated with the device', function test() {
			assert.deepEqual( metrics.getDevice( DEVICENAMES[0] ), DEVICES[ DEVICENAMES[0] ] );
		});

		it( 'should return metric specifications associated with all devices if called without a device name', function test() {
			assert.deepEqual( metrics.getDevice(), DEVICES );
		});

		it( 'should return metric specification(s) associated with the device regardless of input device case sensitivity', function test() {
			assert.deepEqual( metrics.getDevice( DEVICENAMES[0].toUpperCase() ), DEVICES[ DEVICENAMES[0] ] );
		});

	});

});