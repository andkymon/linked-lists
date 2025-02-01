import { LinkedList } from "./linked-list.js"

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("snake");
list.append("turtle");

list.prepend("parrot");
list.prepend("hamster");

console.log(list.size());

console.log(list.head());

console.log(list.tail());

console.log(list.at(1));
console.log(list.at(2));
console.log(list.at(1000));
console.log(list.at(-1));
console.log(list.at("1"));
console.log(list.at("abc"));