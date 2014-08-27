/**
*
*	DEMO
*
*
*	DESCRIPTION:
*		- Demo for using the metrics API.
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

	// MODULES //

	var metrics = require( './../lib' );


	// SCRIPT //

	// Get the list of metrics:
	console.log( metrics.list() );

	/**
	* Returns:
	*	[
	*		'metric0',
	*		'metric1',
	*		...
	*		'metricN'
	*	]
	*/

	// Check if a metric exists:
	console.log( metrics.exists( 'mem.swapspaceutilization' ) );

	/**
	* Returns:
	*	true
	*/

	console.log( metrics.exists( 'cpu.utilization' ) );

	/**
	* Returns:
	*	false
	*/

	// Get a metric specification:
	console.log( metrics.get( 'mem.swapspaceutilization' ) );

	/**
	* Returns:
	*	[object]
	*/

	// Get the list of devices:
	console.log( metrics.listDevices() );

	/**
	* Returns:
	*	[
	*		'device0',
	*		'device1',
	*		...
	*		'deviceN'
	*	]
	*/

	// Get a list of metric specifications by device name:
	console.log( metrics.getDevice( 'DISK' ) );

	/**
	* Returns:
	*	[object]
	*/

})();



