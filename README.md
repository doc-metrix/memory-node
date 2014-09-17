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


#### metrics.mlist()

Lists all metrics included in the specification.

``` javascript
metrics.mlist();
// returns an array of metric names
```

#### metrics.mexist( name )

Checks whether a metric having the provided `name` is included in the specification.

``` javascript
metrics.mexist( 'mem.swapSpaceUtilization' );
// returns true

metrics.mexist( 'cpu.utilization' );
// returns false
```

#### metrics.mget( [name] )

Returns metric specifications. If a metric does not have a specification, returns `null`. To return a single specification,

``` javascript
metrics.mget( 'mem.swapSpaceUtilization' );
// returns {...}

metrics.mget( 'cpu.utilization' );
// returns null
```

To return all metric specifications,

``` javascript
metrics.mget();
// returns {"metric1":{...},"metric2":{...},...}
```


#### metrics.dlist()

Lists all devices known to have associated metric specifications.

``` javascript
metrics.dlist();
// returns an array of device names
```

#### metrics.dexist( name )

Checks whether a device having the provided `name` is known to have associated metric specifications.

``` javascript
metrics.dexist( 'ram' );
// returns true

metrics.dexist( 'eth0' );
// returns false
```

#### metrics.dget( [name] )

Returns specifications associated with devices. If a device does not have associated specifications, returns `null`. To return a single device's specifications,

``` javascript
metrics.dget( 'ram' );
// returns {...}

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