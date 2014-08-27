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
*	Copyright (c) 2014. Athan Reines.
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

	var NAMES = Object.keys( METRICS );


	// DEVICES //

	var DEVICES = {},
		DEVICENAMES,
		key,
		i,
		deviceList;

	/** Iterates through METRICS and creates DEVICES with the following structure:
	*{
	*	deviceName1: {
	*		metricNameA: {},
	*		metricNameB: {},
	*		...
	*	},
	*	deviceName2: {
	*		metricNameH: {},
	*		metricNameI: {},
	*		...
	*	},
	*	...
	*}
	*/
	for ( key in METRICS ) {
		deviceList = METRICS[ key ][ 'device' ];

		if ( deviceList !== null ) {

			for ( i = 0; i < deviceList.length; i++) {

				if ( !DEVICES[ deviceList[ i ] ] ) {
					DEVICES[ deviceList[ i ] ] = {};
				}
				DEVICES[ deviceList[ i ] ][ key ] = METRICS[ key ];
			}
		}
	}

	DEVICENAMES = Object.keys( DEVICES );


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
	* METHOD: list()
	*	Lists all documented metrics.
	*
	* @returns {Array} list of metric names.
	*/
	Metrics.prototype.list = function() {
		return NAMES;
	}; // end METHOD list()

	/**
	* METHOD: exists( name )
	*	Checks whether a metric has a specification.
	*
	* @param {String} name - metric name
	* @returns {Boolean}
	*/
	Metrics.prototype.exists = function( name ) {
		if ( typeof name !== 'string' ) {
			throw new TypeError( 'exists()::invalid input argument. Metric `name` must be a string.' );
		}
		if ( NAMES.indexOf( name ) === -1 ) {
			return false;
		}
		return true;
	}; // end METHOD exists()

	/**
	* METHOD: get( name )
	*	Returns a metric's specification. If a metric does not have a specification, returns null.
	*
	* @param {String} name - metric name
	* @returns {Object|null} metric specification or null
	*/
	Metrics.prototype.get = function( name ) {
		if ( typeof name !== 'string' ) {
			throw new TypeError( 'get()::invalid input argument. Metric `name` must be a string.' );
		}
		if ( NAMES.indexOf( name ) === -1 ) {
			return null;
		}
		return JSON.parse( JSON.stringify( METRICS[ name ] ) );
	}; // end METHOD get()

	/**
	* METHOD: source( name )
	*	Returns a metric's name. The source depends on the OS. Check the relevant specification for the return value and its use. If no source is found, returns null.
	*
	* @param {String} name - metric name
	* @returns {String|null} metric source or null
	*/
	Metrics.prototype.source = function( name ) {
		var spec;
		if ( typeof name !== 'string' ) {
			throw new TypeError( 'source()::invalid input argument. Metric `name` must be a string.' );
		}
		if ( NAMES.indexOf( name ) === -1 ) {
			return null;
		}
		return null;
	}; // end METHOD source()

	/**
	* METHOD: listDevices()
	*	Lists all devices associated with these metrics.
	*
	* @returns {Array} list of device names.
	*/
	Metrics.prototype.listDevices = function() {
		return DEVICENAMES;
	}; // end METHOD listDevices()


	// EXPORTS //

	module.exports = new Metrics();

})();