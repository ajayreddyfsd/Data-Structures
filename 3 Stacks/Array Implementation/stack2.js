//implementing stacks using arrays.
//simply unshift things
//adds to the beginning
let stack = [];
stack.unshift("google");
stack.unshift("instagram");
stack.unshift("youtube");

//but for taking out, only use shift(),
//which gets the firsy element in the array,
//obviously it should be the recent addition to the array.
//hence following LIFO rule
stack.shift();
stack.shift();
stack.shift();
