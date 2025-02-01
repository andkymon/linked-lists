import { LinkedList } from "./linked-list.js"

const list = new LinkedList();

// append()
list.append("dog");
list.append("cat");
list.append("snake");
list.append("turtle");

// prepend()
list.prepend("parrot");
list.prepend("hamster");
// hamster -> parrot -> dog -> cat -> snake -> turtle

// size()
console.log(list.size()); // 6

// head()
console.log(list.head()); // hamster

// tail()
console.log(list.tail()); // turtle

// at()
console.log(list.at(1)); // parrot
console.log(list.at(2)); // dog
console.log(list.at(1000)); 
// Invalid at() arguments
console.log(list.at(-1));
console.log(list.at("1"));
console.log(list.at("abc"));

// pop()
console.log(list.tail()); // turtle
console.log(list.pop()); // turtle
console.log(list.tail()); // snake

// contains()
console.log(list.contains("snake")); // true
console.log(list.contains("eagle")); // false

// find()
console.log(list.find("hamster")); // 0
console.log(list.find("parrot")); // 1
console.log(list.find("snake")); // 4 
console.log(list.find("eagle")); // Node not found

// toString()
console.log(list.toString()); // ( hamster ) -> ( parrot ) -> ( dog ) -> ( cat ) -> ( snake ) -> null
const list2 = new LinkedList();
console.log(list2.toString()); // null