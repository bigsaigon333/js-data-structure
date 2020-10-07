const Heapq = require("./Heapq.js");

test("properly creates internal heap array", () => {
	const hq1 = new Heapq();
	expect(hq1.heap).toEqual([null]);

	const hq2 = new Heapq([1, 3, 2]);
	expect(hq2.heap).toEqual([null, ...[1, 3, 2].sort((a, b) => a - b)]);
});

const array = [
	[3, 2],
	[4, 3],
	[5, 2],
	[5, 2],
];

const cmp = (a, b) => a[0] - b[0];
test("properly Heapq having elements as Array is created ", () => {
	const hq = new Heapq(array, cmp);

	expect(hq.heap).toEqual([null, ...array.sort(cmp)]);
});

test("properly insert value to Heapq having elements as Array  ", () => {
	const hq = new Heapq(array, cmp);
	hq.insert([2, 1]);
	expect(hq.convertToArray()).toEqual([
		[2, 1],
		[3, 2],
		[5, 2],
		[5, 2],
		[4, 3],
	]);
});
