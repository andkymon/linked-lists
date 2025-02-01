import { Node } from "./node.js"

export class LinkedList {
    constructor() {
        this.headNode = null;
    }

    append(value) {
        if (this.headNode === null) {
            this.prepend(value);
            return;
        } 

        const newNode = new Node(value);
        const tail = this.tail();

        tail.nextNode = newNode;
    }

    prepend(value) {
        const newNode = new Node(value, this.headNode);
        this.headNode = newNode;
    }

    size() {
        if (this.headNode === null) {
            return 0;
        }

        let searchPointer = this.headNode;
        let count = 0;

        // Stop when searchPointer points to null, not to tail
        while (searchPointer !== null) { 
            count++;
            searchPointer = searchPointer.nextNode;
        }

        return count;
    }

    head() {
        return this.headNode;
    }

    tail() {
        let searchPointer = this.headNode;

        // Stop when searchPointer points to tail
        while (searchPointer.nextNode !== null) { 
            searchPointer = searchPointer.nextNode;
        }

        return searchPointer;
    }
}