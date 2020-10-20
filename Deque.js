class Deque {
	constructor(props) {
		this.MAX_LEN = 1024;
		this.length = 0;

		this.q = new Array(2 * this.MAX_LEN + 5);
		this.head = this.MAX_LEN;
		this.tail = this.MAX_LEN;
	}

	array() {
		return this.q.slice(this.head, this.tail);
	}

	size() {
		return this.tail - this.head;
	}

	pop() {
		if (this.size() > 0) {
			const ret = this.q[--this.tail];
			this.length = this.size();

			return ret;
		} else return undefined;
	}

	push(...values) {
		for (const val of values) {
			this.q[this.tail++] = val;
		}
		this.length = this.size();
	}

	shift() {
		if (this.size() > 0) {
			const ret = this.q[this.head++];
			this.length = this.size();

			return ret;
		} else return undefined;
	}

	unshift(...values) {
		for (const val of values) {
			this.q[--this.head] = val;
		}
		this.length = this.size();
	}

	front() {
		if (this.size() > 0) return this.q[this.head];
		else return undefined;
	}
	end() {
		if (this.size() > 0) return this.q[this.tail - 1];
		else return undefined;
	}
}

module.exports = Deque;
