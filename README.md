# sort-obj [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/sort-obj/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/sort-obj)

Sort the keys and values of an object.

[![NPM Badge](https://nodei.co/npm/sort-obj.png)](https://npmjs.com/package/sort-obj)

## Install

```sh
npm install sort-obj
```

## Usage

```js
const sortObject = require("sort-obj");
const numberSort = require("num-sort");
const alphaSort = require("alpha-sort");

sortObject({ c: 2, b: 3, a: 1 }, ([a], [b]) => alphaSort.descending);
//=> { a: 1, b: 3, c: 2 }

sortObject({ c: 2, b: 3, a: 1 }, ([_a, a], [_b, b]) => numberSort.descending);
//=> { a: 1, c: 2, b: 3 }

sortObject.keys({ c: 2, b: 3, a: 1 }, alphaSort.descending);
//=> { a: 1, b: 3, c: 2 }

sortObject.values({ c: 2, b: 3, a: 1 }, numberSort.descending);
//=> { a: 1, c: 2, b: 3 }
```

## API

### sortObject(input, mapper)

Sort an object by its keys and values.

### sortObject.keys(input, mapper)

Sort an object by its keys.

### sortObject.values(input, mapper)

Sort an object by its values.

#### input

Type: `object`

The object to sort.

#### mapper

Type: `function`

[Compare function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).
