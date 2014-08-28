#!/usr/bin/env node
/**
*
*	SCRIPTS: spec
*
*
*	DESCRIPTION:
*		- Retrieves metric specifications.
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
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	// MODULES //

	var fs = require( 'fs' ),
		path = require( 'path' ),
		request = require( 'request' );


	// SPECIFICATIONS //

	var resources = {
			'memory': 'https://raw.githubusercontent.com/doc-metrix/memory/master/spec/index.json'
		};


	// VARIABLES //

	var filepath = path.resolve( __dirname, '../specs' );


	// FUNCTIONS //

	/**
	* FUNCTION: getSpecs()
	*	Retrieves the latest specifications.
	*/
	function getSpecs() {
		var keys = Object.keys( resources );
		try {
			fs.mkdirSync( filepath );
		} catch ( err ) {
			// Ignores the error that is thrown when the directory already exists.
			if ( err.errno !== 47 & err.code !== 'EEXIST' ) {
				throw new Error( err );
			}
		}
		for ( var i = 0; i < keys.length; i++ ) {
			request({
				'method': 'GET',
				'uri': resources[ keys[i] ]
			}, onResponse( keys[i] ) );
		}
	} // end FUNCTION getSpecs()

	/**
	* FUNCTION: onResponse( name )
	*	Returns an HTTP response handler.
	* 
	* @param {String} name - resource name
	* @returns {Function} response handler
	*/
	function onResponse( name ) {
		var filename = path.join( filepath, name+'.json' );
		/**
		* FUNCTION: onResponse( error, response, body )
		*	Handler for HTTP response.
		*
		* @param {Object} error - error object
		* @param {Object} response - HTTP response object
		* @param {Object} body - response body
		*/
		return function onResponse( error, response, body ) {
			if ( error ) {
				throw new Error( error );
			}
			if ( !body ) {
				throw new Error( 'Error when retrieving metric specification: ' + name + '.' );
			}
			try {
				JSON.parse( body );
			} catch ( err ) {
				console.log( body );
				throw new Error( 'Unable to parse body content as JSON for metric specification: ' + name + '.' );
			}
			fs.writeFile( filename, body, 'utf8', function onError( error ) {
				if ( error ) {
					throw new Error( error );
				}
			});
		}; // end FUNCTION onResponse()
	} // end FUNCTION onResponse()


	// RUN //

	getSpecs();

})();