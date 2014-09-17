/**
*
*	DOC-METRIX: memory
*
*
*	DESCRIPTION:
*		- Provides an API for doc-metrix memory performance metrics.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. NodePrime.
*
*
*	AUTHOR:
*		Athan Reines. athan@nodeprime.com. 2014.
*
*/

(function() {
	'use strict';

	// SPECIFICATIONS //

	var	METRICS = require( './../specs/memory.json' );


	// VARIABLES //

	var DEVICES = {},
		NAMES = {};
	

	// FUNCTIONS //

	/**
	* FUNCTION: deviceHash()
	*	Transforms the METRICS specification into a hash based on device name.
	*
	* @private
	*/
	function deviceHash() {
		var keys,
			metric,
			spec,
			devices,
			name;

		keys = Object.keys( METRICS );

		for ( var i = 0; i < keys.length; i++ ) {
			metric = keys[ i ];
			spec = METRICS[ metric ];
			devices = spec[ 'device' ];
			if ( devices ) {
				for ( var j = 0; j < devices.length; j++ ) {
					name = devices[ j ];
					if ( !DEVICES[ name ] ) {
						DEVICES[ name ] = {};
					}
					DEVICES[ name ][ metric ] = spec;
				}
			}
		}
	} // end FUNCTION deviceHash()

	/**
	* FUNCTION: metricNames()
	*	Extracts the metric names.
	*
	* @private
	*/
	function metricNames() {
		var names = Object.keys( METRICS );
		NAMES.mList = names;
		NAMES.mLowercase = names.map( function ( name ) {
			return name.toLowerCase();
		});
	} // end FUNCTION metricNames()

	/**
	* FUNCTION: deviceNames()
	*	Extracts the device names.
	*
	* @private
	*/
	function deviceNames() {
		var names = Object.keys( DEVICES );
		NAMES.dList = names;
		NAMES.dLowercase = names.map( function ( name ) {
			return name.toLowerCase();
		});
	} // end FUNCTION deviceNames()


	// INIT //

	deviceHash();
	metricNames();
	deviceNames();


	// METRICS //

	/**
	* FUNCTION: Metrics()
	*	Metrics constructor.
	*
	* @constructor
	* @returns {Metrics} Metrics instance
	*/
	function Metrics() {
		return this;
	} // end FUNCTION Metrics()

	/**
	* METHOD: mlist()
	*	Lists all documented metric names.
	*
	* @returns {Array} list of metric names.
	*/
	Metrics.prototype.mlist = function() {
		return NAMES.mList.slice();
	}; // end METHOD mlist()

	/**
	* METHOD: dlist()
	*	Lists all device names associated with metrics.
	*
	* @returns {Array} list of device names.
	*/
	Metrics.prototype.dlist = function() {
		return NAMES.dList.slice();
	}; // end METHOD dlist()

	/**
	* METHOD: mexists( name )
	*	Checks whether a metric has a specification.
	*
	* @param {String} name - metric name
	* @returns {Boolean}
	*/
	Metrics.prototype.mexists = function( name ) {
		if ( typeof name !== 'string' ) {
			throw new TypeError( 'mexists()::invalid input argument. Metric `name` must be a string.' );
		}
		if ( NAMES.mLowercase.indexOf( name.toLowerCase() ) === -1 ) {
			return false;
		}
		return true;
	}; // end METHOD mexists()

	/**
	* METHOD: dexists( name )
	*	Checks whether a device has associated metric specifications.
	*
	* @param {String} name - device name
	* @returns {Boolean}
	*/
	Metrics.prototype.dexists = function( name ) {
		if ( typeof name !== 'string' ) {
			throw new TypeError( 'dexists()::invalid input argument. Device `name` must be a string.' );
		}
		if ( NAMES.dLowercase.indexOf( name.toLowerCase() ) === -1 ) {
			return false;
		}
		return true;
	}; // end METHOD dexists()

	/**
	* METHOD: mget( name )
	*	Returns metric specifications. If a metric `name` is provided, returns an individual metric specification. If no specification exists, returns `null`. If no argument is provided, returns all metric specifications.
	*
	* @param {String} name - metric name
	* @returns {Object|null} all metric specification, a single specification, or null
	*/
	Metrics.prototype.mget = function( name ) {
		var idx, metric;
		if ( arguments.length === 0 ) {
			return JSON.parse( JSON.stringify( METRICS ) );
		}
		if ( typeof name !== 'string' ) {
			throw new TypeError( 'mget()::invalid input argument. Metric `name` must be a string.' );
		}
		idx = NAMES.mLowercase.indexOf( name.toLowerCase() );
		if ( idx === -1 ) {
			return null;
		}
		metric = NAMES.mList[ idx ];
		return JSON.parse( JSON.stringify( METRICS[ metric ] ) );
	}; // end METHOD mget()

	/**
	* METHOD: dget( name )
	*	Returns specifications associated with devices. If a device `name` is provided, returns an `object` containing associated metric specifications. If no specifications are associated with a device, returns `null`. If no argument is provided, returns an `object` listing all devices and their associated specifications.
	*
	* @param {String} name - device name
	* @returns {Object|null} an object containing all devices and their associated specifications, a single device's associated specifications, or null
	*/
	Metrics.prototype.dget = function( name ) {
		var idx, device;
		if ( arguments.length === 0 ) {
			return JSON.parse( JSON.stringify( DEVICES ) );
		}
		if ( typeof name !== 'string' ) {
			throw new TypeError( 'dget()::invalid input argument. Device `name` must be a string.' );
		}
		idx = NAMES.dLowercase.indexOf( name.toLowerCase() );
		if ( idx === -1 ) {
			return null;
		}
		device = NAMES.dList[ idx ];
		return JSON.parse( JSON.stringify( DEVICES[ device ] ) );
	}; // end METHOD dget()


	// EXPORTS //

	module.exports = new Metrics();

})();