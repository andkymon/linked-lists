import { LinkedList } from "./linked-list.js"

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.prepend("parrot");
list.prepend("hamster");
list.append("snake");
list.append("turtle");

console.log(list.size());
console.log(list.head());
console.log(list.tail());

