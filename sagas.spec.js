import test from "tape";
import { call, put } from "redux-saga/effects";

import { incrementAsync, delay } from "./sagas";

test("incrementAsync Saga test", assert => {
	const iterator = incrementAsync();

	assert.deepEqual(
		iterator.next().value,
		call(delay, 1000),
		"incrementAsync Saga must call delay(1000)"
	);
	assert.deepEqual(
		iterator.next().value,
		put({ type: "INCREMENT" }),
		"incrementAsync Saga must dispatch an INCREMENT action"
	);
	assert.deepEqual(
		iterator.next(),
		{ done: true, value: undefined },
		"incrementAsync Saga must be done"
	);

	assert.end();
});
