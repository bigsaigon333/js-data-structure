class Heapq {
	constructor(array, cmp = (a, b) => a - b) {
		this.heap = [null];
		this.cmp = cmp;

		if (array instanceof Array) {
			array.sort(cmp);
			this.heap.push(...array);
		}
	}

	convertToArray() {
		return this.heap.slice(1);
	}

	size() {
		return this.heap.length - 1;
	}

	parent(index) {
		return Math.floor(index / 2);
	}

	leftChild(index) {
		return index * 2;
	}

	rightChild(index) {
		return index * 2 + 1;
	}

	swap(index1, index2) {
		[this.heap[index1], this.heap[index2]] = [
			this.heap[index2],
			this.heap[index1],
		];
	}

	insert(val) {
		this.heap.push(val);

		let child = this.heap.length - 1;
		let parent = this.parent(child);

		while (parent >= 1 && this.cmp(this.heap[parent], this.heap[child]) > 0) {
			this.swap(parent, child);

			[parent, child] = [this.parent(parent), parent];
		}
	}

	// if heap doesn't have any node(heap.length === 1), it returns undefined
	top() {
		return this.heap[1];
	}

	extractTop() {
		if (this.size() === 1) return this.heap.pop();

		let index = this.heap.length - 1;
		this.swap(1, index);
		const ret = this.heap.pop();

		this.heapify();

		return ret;
	}

	heapify() {
		if (this.size() === 1) return;

		let parent = 1;
		let leftChild = this.leftChild(parent);
		let rightChild = this.rightChild(parent);

		let minChild = leftChild;
		if (
			this.heap[rightChild] &&
			this.cmp(this.heap[rightChild], this.heap[leftChild]) < 0
		) {
			minChild = rightChild;
		}
		// console.log(parent, leftChild, rightChild, minChild);
		// console.log(
		// 	this.heap[parent],
		// 	this.heap[leftChild],
		// 	this.heap[rightChild],
		// 	this.heap[minChild]
		// );

		while (this.cmp(this.heap[parent], this.heap[minChild]) > 0) {
			this.swap(parent, minChild);

			parent = minChild;
			leftChild = this.leftChild(parent);

			if (!this.heap[leftChild]) break;
			minChild = leftChild;
			rightChild = this.rightChild(parent);

			if (
				this.heap[rightChild] &&
				this.cmp(this.heap[rightChild], this.heap[leftChild]) < 0
			) {
				minChild = rightChild;
			}

			// console.log(parent, leftChild, rightChild, minChild);
			// console.log(
			// 	this.heap[parent],
			// 	this.heap[leftChild],
			// 	this.heap[rightChild],
			// 	this.heap[minChild]
			// );
		}
	}
}

module.exports = Heapq;
