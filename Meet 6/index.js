//string literal

// const greeting = 'Hello';
// const name = 'Alice';

// // Concatenating strings
// const message = greeting + ' ' + name; // 'Hello Alice'

// // String length
// const length = message.length; // 11

// // Accessing characters in a string
// const firstCharacter = message[0]; // 'H'

// // Extracting substrings
// const substring = message.slice(0, 5); // 'Hello'

// // String methods
// const uppercaseMessage = message.toUpperCase(); // 'HELLO ALICE'
// const lowercaseMessage = message.toLowerCase(); // 'hello alice'

// // Checking if a string contains a substring
// const containsHello = message.includes('Hello'); // true

// // Template literals
// const age = 30;
// const sentence = `My name is ${name} and I am ${age} years old.`; // 'My name is Alice and I am 30 years old.'

//CONTOH SIR

const fullNmae = "John Doe";
let age = 33;
let address = "Manado";


//let kalimat5 = "Hallow nama saya " +fullNmae +" , umur saya " +age;
const kalimat5 = `hello, ${fullNmae}`;
//console.log(kalimat5);


//ARROW FUNCTION
// fungsi yang tidak memiliki parameter
const namaJenisAnjing = () => {
    const anjing = ["Pug", "Bulldog", "Poodle"];
    return anjing[Math.floor(Math.random() * (anjing.length))];
}

//console.log(namaJenisAnjing()); // Output: Pug (hasil random)

const sayGreetings6 = (nama) => {
    return `Hellow ${nama}`;
}

//console.log(sayGreetings6("hal"));

//impicit return value

function greeting(nama) {
    return `Hi ${nama}`;
}

//console.log(greeting('halo'));

// pada iffe
let namaku = 'andreas';
let output1 = (() => `Hellow ${namaku}`)();

//console.log(output1);

//pada callback

let num1 = [1,2,3,4,5];
let output2 = num1.map((item) => item);
console.log(output2[3]);