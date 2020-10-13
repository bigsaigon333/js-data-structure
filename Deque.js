class Deque {
	constructor(props) {
		this.MAX_LEN = 1024;

		if (props instanceof Array) {
			if (this.MAX_LEN < props.length) {
				this.MAX_LEN = props.length;
			}

			this.q = new Array(2 * this.MAX_LEN + 5);

			this.head = Math.floor(this.MAX_LEN - props.length / 2);

			let i = 0;
			for (; i < props.length; i++) {
				this.q[this.head + i] = props[i];
			}
			this.tail = this.head + i;
		} else {
			if (typeof props === "number") this.MAX_LEN = props;

			this.q = new Array(2 * this.MAX_LEN + 5);
			this.head = this.MAX_LEN;
			this.tail = this.MAX_LEN;
		}
	}

	array() {
		return this.q.slice(this.head, this.tail);
	}

	size() {
		return this.tail - this.head;
	}

	pop() {
		if (this.size() > 0) return this.q[--this.tail];
		else return undefined;
	}

	push(val) {
		this.q[this.tail++] = val;
	}

	shift() {
		if (this.size() > 0) return this.q[this.head++];
		else return undefined;
	}

	unshift(val) {
		this.q[--this.head] = val;
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
