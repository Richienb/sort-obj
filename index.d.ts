import { ValueOf } from "type-fest"

type SortFunction<ValueType> = (left: ValueType, right: ValueType) => number

declare const sortObject: {
	/**
	Sort an object by its keys and values.
	@param input The object to sort.
	@param mapper [Compare function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).
	@example
	```
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
	*/
	<ObjectType extends object>(input: ObjectType, mapper: SortFunction<[keyof ObjectType, ValueOf<ObjectType>]>): ObjectType

	/**
	Sort an object by its keys.
	@param input The object to sort.
	@param mapper [Compare function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).
	@example
	```
	const sortObject = require("sort-obj");
	const alphaSort = require("alpha-sort");

	sortObject.keys({ c: 2, b: 3, a: 1 }, alphaSort.descending);
	//=> { a: 1, b: 3, c: 2 }
	```
	*/
	keys<ObjectType extends object>(input: ObjectType, mapper: SortFunction<keyof ObjectType>): ObjectType

	/**
	Sort an object by its values.
	@param input The object to sort.
	@param mapper [Compare function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).
	@example
	```
	const sortObject = require("sort-obj");
	const numberSort = require("num-sort");

	sortObject.values({ c: 2, b: 3, a: 1 }, numberSort.descending);
	//=> { a: 1, c: 2, b: 3 }
	```
	*/
	values<ObjectType extends object>(input: ObjectType, mapper: SortFunction<ValueOf<ObjectType>>): ObjectType
}

export = sortObject
