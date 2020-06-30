"use strict"

const fromEntries = require("fromentries")

const main = (input, mapper) => {
	if (typeof input !== "object") {
		throw new TypeError(`Expected an object as the first parameter, got ${typeof input}`)
	}

	if (typeof mapper !== "function") {
		throw new TypeError(`Expected a function as the second parameter, got ${typeof mapper}`)
	}

	// TODO: Use Object.fromEntries when targeting Node.js 12
	return fromEntries(Object.entries(input).sort(mapper))
}

module.exports = main
module.exports.keys = (input, mapper) => main(input, ([a], [b]) => mapper(a, b))
module.exports.values = (input, mapper) => main(input, ([_a, a], [_b, b]) => mapper(a, b))
