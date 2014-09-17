doc-metrix-memory
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Provides an API for doc-metrix memory performance metrics.


## Installation

``` bash
$ npm install doc-metrix-memory
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To interface with the memory specification,

``` javascript
var metrics = require( 'doc-metrix-memory' );
```

The interface has the following methods...


### Metrics

Metric centric methods...


#### metrics.mexists( name )

Checks whether a metric having the provided `name` is included in the specification.

``` javascript
metrics.mexists( 'mem.swapSpaceUtilization' );
// returns true

metrics.mexists( 'cpu.utilization' );
// returns false
```

Note: method is __not__ case sensitive.


#### metrics.mlist()

Lists all metrics included in the specification.

``` javascript
metrics.mlist();
// returns an array of metric names
```


#### metrics.mfilter( regexp )

Lists all metrics satisfying a regular expression filter.

``` javascript
metrics.mfilter( /active/i );
```

Note: filtering for metric names __is__ case sensitive. Ignore case `/i` for case insensitive filtering.


#### metrics.mget( [filter] )

Returns metric specifications. The provided `filter` may be a `string` or a regular expression. If a metric does not have a specification, returns `null`. To return a single specification,

``` javascript
metrics.mget( 'mem.swapSpaceUtilization' );
// returns {...}

metrics.mget( 'cpu.utilization' );
// returns null
```

To return metric specifications matching a filter,

``` javascript
metrics.mget( /Active/i );
// returns {...}
```

To return all metric specifications,

``` javascript
metrics.mget();
// returns {"metric1":{...},"metric2":{...},...}
```

Note: when the filter is a `string`, the method is __not__ case sensitive.

Note: when the filter is a regular expression, the method __is__ case sensitive. If case does not matter, ignore case `/i`;


### Devices

Device centric methods...


#### metrics.dexists( name )

Checks whether a device having the provided `name` is known to have associated metric specifications.

``` javascript
metrics.dexists( 'ram' );
// returns true

metrics.dexists( 'eth0' );
// returns false
```

#### metrics.dlist()

Lists all devices known to have associated metric specifications.

``` javascript
metrics.dlist();
// returns an array of device names
```

Note: the returned list __may__ contain regular expressions. Regular expressions are included to account for platform variability.


#### metrics.dget( [name] )

Returns specifications associated with devices. If a device does not have associated specifications, returns `null`. To return a single device's specifications,

``` javascript
metrics.dget( 'ram' );
// returns {"metric0":{...},"metric1":{...},...}

metrics.dget( 'eth0' );
// returns null
```

To return all devices and their associated specifications,

``` javascript
metrics.dget();
// returns {"device0":{...},"device1":{...},...}
```



## Examples

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Notes

After running the following commands,

``` bash
$ npm install
$ npm update
```

this package, when used as a dependency, will attempt an HTTP request to retrieve the latest specification from [Github](https://github.com/doc-metrix/memory).

During development, run the following command to retrieve the latest specification

``` bash
$ npm run specs
```



## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ open reports/coverage/lcov-report/index.html
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. [NodePrime](http://nodeprime.com).


[npm-image]: http://img.shields.io/npm/v/doc-metrix-memory.svg
[npm-url]: https://npmjs.org/package/doc-metrix-memory

[travis-image]: http://img.shields.io/travis/doc-metrix/memory-node/master.svg
[travis-url]: https://travis-ci.org/doc-metrix/memory-node

[coveralls-image]: https://img.shields.io/coveralls/doc-metrix/memory-node/master.svg
[coveralls-url]: https://coveralls.io/r/doc-metrix/memory-node?branch=master

[dependencies-image]: http://img.shields.io/david/doc-metrix/memory-node.svg
[dependencies-url]: https://david-dm.org/doc-metrix/memory-node

[dev-dependencies-image]: http://img.shields.io/david/dev/doc-metrix/memory-node.svg
[dev-dependencies-url]: https://david-dm.org/dev/doc-metrix/memory-node

[github-issues-image]: http://img.shields.io/github/issues/doc-metrix/memory-node.svg
[github-issues-url]: https://github.com/doc-metrix/memory-node/issues