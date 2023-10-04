// function cekAngka(angka1,  angka2) {

//     return angka1 >= angka2 ? "Angka 1 lebih besar dari angka 2, karena angka 1 adalah =" + angka1 : "Angka 2 lebih besar dari angka 1, karena angka 2 adalah =" + angka2;
// }

// let angka2 = 10;
// let angka1 = 3;

// console.log(cekAngka(angka1,angka2));

// const a = function () {
//     return "hellow";
// };

// console.log(a);

// (function() {
//     return "hellow";
// })();

// var result = (function() {
//     var x = 10;
//     var y = 20;
//     return x + y;
// })();

// console.log(result); // Output: 30

function cekGanjilGenap(angka, callback) {
    let hasil = angka % 2 === 1 ? "Ganjil" : "Genap";
    callback(hasil); // Memanggil callback function
}

function callbackFunction(hasil) {
    console.log("Callback function has been invoked!");
}

doSomething(callbackFunction); // Menjalankan doSomething dengan callback
