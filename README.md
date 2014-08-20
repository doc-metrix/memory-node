doc-metrix-memory
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

Provides an API for doc-metrix memory performance metrics.


## Installation

``` bash
$ npm install doc-metrix-memory
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## API

To interface with the memory specification,

``` javascript
var metrics = require( 'doc-metrix-memory' );
```

The interface has the following methods...


#### metrics.list()

Lists all metrics included in the specification.

``` javascript
metrics.list();
// returns an array of metric names
```

#### metrics.exist( name )

Checks whether a metric having the provided `name` is included in the specification.

``` javascript
metrics.exist( 'mem.utilization' );
// returns true

metrics.exist( 'cpu.utilization' );
// returns false
```

#### metrics.get( name )

Returns a metric's specification. If a metric does not have a specification, returns `null`.

``` javascript
metrics.get( 'mem.utilization' );
// returns [object]

metrics.get( 'cpu.utilization' );
// returns null
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

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/doc-metrix-memory.svg
[npm-url]: https://npmjs.org/package/doc-metrix-memory

[travis-image]: http://img.shields.io/travis/doc-metrix/memory-node/master.svg
[travis-url]: https://travis-ci.org/doc-metrix/memory-node

[coveralls-image]: https://img.shields.io/coveralls/doc-metrix/memory-node/master.svg
[coveralls-url]: https://coveralls.io/r/doc-metrix/memory-node?branch=master

[dependencies-image]: http://img.shields.io/david/doc-metrix/doc-metrix-memory.svg
[dependencies-url]: https://david-dm.org/doc-metrix/doc-metrix-memory

[dev-dependencies-image]: http://img.shields.io/david/dev/doc-metrix/doc-metrix-memory.svg
[dev-dependencies-url]: https://david-dm.org/dev/doc-metrix/doc-metrix-memory

[github-issues-image]: http://img.shields.io/github/issues/doc-metrix/memory-node.svg
[github-issues-url]: https://github.com/doc-metrix/memory-node/issues