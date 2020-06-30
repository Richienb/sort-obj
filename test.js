const test = require("ava")
const numberSort = require("num-sort")
const alphaSort = require("alpha-sort")
const sortObject = require(".")

const inputObject = { c: 2, b: 3, a: 1 }

test("main", t => {
	t.deepEqual(sortObject(inputObject, ([a], [b]) => alphaSort.descending(a, b)), { a: 1, b: 3, c: 2 })
	t.deepEqual(sortObject(inputObject, ([_a, a], [_b, b]) => numberSort.descending(a, b)), { a: 1, c: 2, b: 3 })
})

test(".keys", t => {
	t.deepEqual(sortObject.keys(inputObject, alphaSort.descending), { a: 1, b: 3, c: 2 })
})

test(".values", t => {
	t.deepEqual(sortObject.values(inputObject, numberSort.descending), { a: 1, c: 2, b: 3 })
})
