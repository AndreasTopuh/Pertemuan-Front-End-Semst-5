//array

const students = ['andreas', 'jack', 'ezra', ' william'];
const numers = [1,2,3,5,4];

const john = ['john', 'doe', 33, true];

//ganti
students[2] = 'deas';
//console.log(students[2]);
// console.log(numers);
// console.log(john);
//console.log(students);

//length
//console.log(students.length);


//looping array
for (let i = 0; i < students.length; i++) {
    //console.log(students[i]);
}


//METHOD

// TOSTRING
//console.log(students.toString());

//join()
//console.log(john.join(" "));

//POP
//john.pop();
//console.log(john);

//PUSH
//john.push("Good Mornig");
//console.log(john);

//shift - hapus depan
//john.shift();
//console.log(john);

//unshift - hapus depan
//john.unshift("pertama boss");
//console.log(john);

//splice

//john.splice(3,0, true);
//console.log(john);

// se maso ditengah

// const tengah = john.length/2;
// john.splice(tengah, 0, "true");

// console.log(john);



// OBJECT

// Membuat objek "person" dengan properti nama dan umur
const person = {
    name: "John",
    age: 30,
    status: "menikah",

    skill: {
        alam: "memanjat",
        lautan: "menyelam",
    },

    pendidikan: {
        s1: "Informatika",
    },

    // function
    sapa: function() {
        console.log("hallo nama saya adalah " + this.name);
    },
};

// person.sapa();



// Mengakses nilai properti
//console.log(person.name); // Output: John
//console.log(person.age);  // Output: 30

// Mengubah nilai properti
// person.age = 31;
// console.log(person.age);  // Output: 31

// Menambah properti baru
// person.job = "Developer";
// console.log(person.job);  // Output: Developer

const siswaBEMBI = [
    {
        name: "jack",
        age: 25,
        status: "single"
    },
    {
        name: "william",
        age: 28,
        status: "married"
    },
    {
        name: "deas",
        age: 22,
        status: "single"
    },
    {
        name: "syellin",
        age: 24,
        status: "single"
    },
    {
        name: "putr",
        age: 27,
        status: "single"
    }
];

// console.log(students);


//for each

// students.forEach(function (item){
//     console.log(item.name);
// });

//map

// let output = students.map(function (item){
//     return item.name;
// };

//filter ()
// let output = siswaBEMBI.filter(function (item){
//     return item.name === "deas";
// });

// console.log(output);

//find
let output = siswaBEMBI.find(function (item){
    return item.name === "deas";
});

console.log(output);