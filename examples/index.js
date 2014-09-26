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

	// Check if a metric exists:
	console.log( metrics.mexists( 'mem.swapSpaceUtilization' ) );

	/**
	* Returns:
	*	true
	*/

	console.log( metrics.mexists( 'cpu.utilization' ) );

	/**
	* Returns:
	*	false
	*/

	// Get the list of metrics:
	console.log( metrics.mlist() );

	/**
	* Returns:
	*	[
	*		'metric0',
	*		'metric1',
	*		...
	*		'metricN'
	*	]
	*/

	// Filter the list of metrics:
	console.log( metrics.mfilter( /Active/i ) );

	/**
	* Returns:
	*	[
	*		'metric0',
	*		'metric1',
	*		...
	*		'metricM'
	*	]
	*/

	// Get metric documentation:
	console.log( metrics.mget( 'mem.swapSpaceUtilization' ) );

	/**
	* Returns:
	*	{
			"displayName": "Swap Space Utilization",
			"units": "utilization",
			...
		}
	*/

	// Get metric documentation matching a filter:
	console.log( metrics.mget( /Active/i ) );

	/**
	* Returns:
	*	{
			"metric0": {
				"displayName": "...",
				"units": "...",
				...
			},
			...
			"metricM": {
				"displayName": "...",
				"units": "...",
				...
			}
		}
	*/

	// Check if a device is known to have associated metrics:
	console.log( metrics.dexists( 'ram' ) );

	/**
	* Returns:
	*	true
	*/

	console.log( metrics.dexists( 'eth0' ) );

	/**
	* Returns:
	*	false
	*/

	// Get the list of devices:
	console.log( metrics.dlist() );

	/**
	* Returns:
	*	[
	*		'device0',
	*		'device1',
	*		...
	*		'deviceN'
	*	]
	*/

	// Get a list of metric documentation arranged by device name:
	console.log( metrics.dget( 'DISK' ) );

	/**
	* Returns:
	*	{
			"metric0": {
				"displayName": "...",
				"units": "...",
				...
			},
			"metric1": {
				"displayName": "...",
				"units": "...",
				...
			},
			...
		}
	*/

})();



