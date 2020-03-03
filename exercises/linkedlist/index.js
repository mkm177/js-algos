// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		this.head = new Node(data, this.head);
	}

	size() {
		let cnt = 0;
		let node = this.head;
		while (node) {
			cnt++;
			node = node.next;
		}
		return cnt;
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		let node = this.head;
		let temp = null;
		while (node) {
			temp = node;
			node = node.next;
		}
		return temp;
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		if (!this.head) {
			return;
		}
		this.head = this.head.next;
	}

	removeLast() {
		if (!this.head) {
			return;
		}
		if (!this.head.next) {
			this.head = null;
			return;
		}
		let previous = this.head;
		let node = this.head.next;
		while (node.next) {
			previous = node;
			node = node.next;
		}
		previous.next = null;
	}

	insertLast(data) {
		const last = this.getLast();
		if (last) {
			last.next = new Node(data);
		} else {
			this.head = new Node(data);
		}
	}
	getAt(index) {
		let node = this.head;
		let counter = 0;
		while (node) {
			if (counter === index) {
				return node;
			}
			node = node.next;
			counter++;
		}
		return null;
	}

	removeAt(index) {
		if (!this.head) {
			return null;
		}
		if (index === 0) {
			this.head = this.head.next;
			return;
		}

		const prevNode = this.getAt(index - 1);
		if (!prevNode || !prevNode.next) {
			return;
		}
		prevNode.next = prevNode.next.next;
	}

	insertAt(data, index) {
		if (!this.head) {
			this.head = new Node(data);
			return;
		}

		if (index === 0) {
			this.head = new Node(data, this.head);
			return;
		}
		const prev = this.getAt(index - 1) || this.getLast();
		const node = new Node(data, prev.next);
		prev.next = node;
	}

	forEach(fn) {
		let node = this.head;
		let counter = 0;
		while (node) {
			fn(node, counter);
			node = node.next;
			counter++;
		}
	}

	*[Symbol.iterator]() {
		let node = this.head;
		while (node) {
			yield node;
			node = node.next;
		}
	}
}

module.exports = { Node, LinkedList };
