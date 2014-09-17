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

	// Get a metric specification:
	console.log( metrics.mget( 'mem.swapSpaceUtilization' ) );

	/**
	* Returns:
	*	{
			"displayName": "Swap Space Utilization",
			"units": "utilization",
			...
		}
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

	// Get a list of metric specifications arranged by device name:
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



