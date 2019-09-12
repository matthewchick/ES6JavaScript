// Use var to allow variable name to be global
// 1.  Use let to allow variable name to be local - ES6
/*
if (true) {
    // var name ="Matthew";
    let name = 'Matthew';

}
alert(name);
*/
//let fname = 'Matthew';
//let lname = "Chik";
//let age = prompt("Guess Matthew's age ..");

//old way
//let result = fname + ' '+lname+ ' is ' + age + ' years old';
//alert(result);

//2. using template string  - ES6
//let result = `${fname} ${lname} is ${age} years old`;
//alert(result);

//3. use default parameter  - ES6
//function welcome(user="Jeremy", message= 'Hello') {
//    alert(`Hello ${user},${message}`);
//}
//welcome();
//welcome('Matthew', 'Good Afternoon');

//4. arrow function - ES6
//function gretting(message) {
//    return alert(`${message} everyone!`);
//} 

//let gretting = (message) => alert(`${message} everyone!`);
//gretting('Good morning');

let gretting = () => alert(`Hello everyone!`);
gretting('Good morning');

let createBlog = (title, body) => {
    if (!title) {
        throw new Error('A title is requires');
    }
    if (!body) {
        throw new Error("Body can't be emply")
    }
    alert(`${title} - ${body}`);
};

createBlog('Blog title', 'Blog body');