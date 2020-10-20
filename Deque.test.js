const Deque = require("./Deque.js");

const ex1 = [2, 3, 4, 5];
const dq1 = new Deque();
dq1.push(...ex1);

test("convertToArray", () => {
	expect(dq1.array()).toEqual([2, 3, 4, 5]);
});
test("size", () => {
	expect(dq1.size()).toBe(4);
});

test("pop", () => {
	expect(dq1.pop()).toBe(5);
});

test("push", () => {
	dq1.push(10);
	expect(dq1.array()).toEqual([2, 3, 4, 10]);
});

test("shift", () => {
	expect(dq1.shift()).toBe(2);
});

test("unshift", () => {
	dq1.unshift(7);
	expect(dq1.array()).toEqual([7, 3, 4, 10]);
});

test("front", () => {
	expect(dq1.front()).toBe(7);
});

test("end", () => {
	expect(dq1.end()).toBe(10);
});

const dq2 = new Deque();
dq2.push(1);

test("when the size is zero, it becomes an empty array properly", () => {
	dq2.pop();
	expect(dq2.size()).toBe(0);
	expect(dq2.array()).toEqual([]);
});

test("pushes properly after it gets empty", () => {
	dq2.push(10);
	expect(dq2.array()).toEqual([10]);
});

test("pop properly after it becomes empty array", () => {
	dq2.pop();

	expect(dq2.pop()).toBeUndefined();
});

test("push as many as possible over its length", () => {
	const dq = new Deque();
	dq.push(1);
	dq.push(2);
	dq.push(3);
	dq.push(4);
	dq.push(5);
	dq.push(6);
	expect(dq.array()).toEqual([1, 2, 3, 4, 5, 6]);
});

// test("unshift", () => {
// 	dq1.unshift(7);
// 	expect(dq1.array()).toEqual([7, 3, 4, 10]);
// });

// test("front", () => {
// 	expect(dq1.front()).toBe(7);
// });

// test("end", () => {
// 	expect(dq1.end()).toBe(10);
// });
