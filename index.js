// Use var to allow variable name to be global
// Use let to allow variable name to be local
/*
if (true) {
    // var name ="Matthew";
    let name = 'Matthew';

}
alert(name);
*/
let fname = 'Matthew';
let lname = "Chik";
let age = prompt("Guess Matthew's age ..");

// old way
// let result = fname + ' '+lname+ ' is ' + age + ' years old';
// alert(result);

// using template string  - ES6
let result = `${fname} ${lname} is ${age} years old`;
alert(result);

//use default parameter  - ES6
function welcome(user="Jeremy", message= 'Hello') {
    alert(`Hello ${user},${message}`);
}
welcome();
welcome('Matthew', 'Good Afternoon');