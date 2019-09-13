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

//5 Use this keyworld to make the function to window object
function sayhi() {

}
console.log(this);   // sayhi() is the function belong to window object

// create an object containing array properties and method
/* object literal
let nepal = {
    // add property
    mountains: ['Everest', 'Fish Tail', 'Annapurna'],
    // add variable method
    printWithDash: function() {
        console.log('Inside printWithDash', this);   //point to nepal object
        setTimeout(function() {
            console.log('Inside setTimeout', this);  //point to window object - this is the problem
            console.log(this.mountains.join(" - "));
        }, 3000)
    }
}
*/
let nepal = {
    // add property
    mountains: ['Everest', 'Fish Tail', 'Annapurna'],
    // add variable method
    printWithDash: function() {
        console.log('Inside printWithDash', this);   //point to nepal object
        setTimeout(() => {
            console.log('Inside setTimeout', this);  //fix the problem to point to nepal object
            console.log(this.mountains.join(" - "));
        }, 3000)
    }
}
alert(nepal.mountains);
nepal.printWithDash();

//6 destrusting object - in ES6
//structing an object
let thingsToDo = {
    morning: "Exercise",
    afternoon: "Work",
    evening: "Code",
    night: ['sleep','Dream']
}
//before destructing
console.log(thingsToDo.morning, ' - ' , thingsToDo.afternoon);
// after destructing
let {morning, afternoon} = thingsToDo;  
console.log(morning, ' - ' ,afternoon);

//function
//let uniStudent = student => {
//    console.log(`${student.name} from ${student.university}`);
//}

//let uniStudent = student => {
//    let{name, university} = student;
//   console.log(`${name} from ${university}`);
//}

let uniStudent = ({name, university}) => {      //pass destructing properties to function parameters
    console.log(`${name} from ${university}`);
}
//https://medium.com/@luke_smaki/javascript-es6-classes-8a34b0a6720a
//object
uniStudent({
    name: 'Matthew',
    university: 'Unversity of New South Wales'
});

//7 destruct array
//old method
//let [firstMountain]=['Everest', 'Fish Tail', 'Annapurna'];
//console.log(firstMountain);
//new method using destructing
let [, , firstMountain]=['Everest', 'Fish Tail', 'Annapurna'];
console.log(firstMountain);

//8 restructing is used to convert property and method into an object
var name = 'Everest';
var height = 8848;
var output = function() {
    console.log(`Mt. ${this.name} is ${this.height} meter tall`);
}
var adventureClimbing = {name, height, output};     //build an object by restructing method
console.log(adventureClimbing);
adventureClimbing.output();

//old way
var adventureClimbing = {
    name: 'Everest',
    height: 8848,
    output() {       //in ES6
        console.log(`Mt. ${this.name} is ${this.height} meter tall`);
    }
    //output: function() {
    //    console.log(`Mt. ${this.name} is ${this.height} meter tall`);
    //}
};

//8 Spread and rest operator  ... combine two arrays or two objects 
var mountains = ['Everest', 'Fish Tail', 'Annapurna'];
var mountainsFromJapan = ['Fuji'];
var allMountains = [...mountains, ...mountainsFromJapan];
console.log(allMountains);

var day = {
    breakfast: 'toast with milk',
    lunch: 'rice with chicken curry'
}

var night ={
    dinner: 'noodle soup'
}

var picnic = {...day, ...night};
console.log(picnic);

//rest
var rivers = ['Sunkoshi','Tamakoshi','Saptakoshi' ];
var [first, ...rest] = rivers;
console.log(first);
console.log(rest);