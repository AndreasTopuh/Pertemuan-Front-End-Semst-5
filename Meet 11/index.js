//MODULE
// = maintainability ( eroro hanya bagian situ saja )
// = resuable code ( boleh pakai lagi di codign lain )

// import { fullName ,  familyName, sayGreatings} from "./utils.js";

// console.log(fullName);
// console.log(familyName);

//ASYNCHRONOUS

//synchronous = single thread/proses = blocking
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3");
// console.log("Proses 4");
// console.log("Proses 5");
// console.log("Proses 6");

//asynchronous = mulit thread/proses = blocking

// setTimeout ( () => {
//     console.log("WELCOMEHACK");
// }, 5000);
// setTimeout ( () => {
//     console.log("Getting Your IP....");
// }, 5000);
// setTimeout ( () => {
//     console.log("...................");
// }, 10000);
// setTimeout ( () => {
//     console.log("...................");
// }, 12000);
// setTimeout ( () => {
//     console.log("...................");
// }, 13000);
// setTimeout ( () => {
//     console.log("Geting Your IP...80%");
// }, 8000);
// setTimeout ( () => {
//     console.log("Geting Your IP...90%");
// }, 9000);
// setTimeout ( () => {
//     console.log("Geting Your IP...100%");
// }, 10000);
// setTimeout ( () => {
//     console.log("...................");
// }, 9000);
// setTimeout ( () => {
//     console.log("Succesfully get your IP");
// }, 14000);
// setTimeout ( () => {
//     console.log("Your IP : 192.168.122.9");
// }, 6000);

// Membuat fungsi async yang akan mengeksekusi semua tugas secara konkuren
// async function startTasks() {
//     // Menggunakan Promise.all untuk mengeksekusi beberapa tugas secara konkuren
//     await Promise.all([
//       new Promise((resolve) => {
//         setTimeout(() => {
//           console.log("WELCOMEHACK");
//           resolve();
//         }, 5000);
//       }),
  
//       new Promise((resolve) => {
//         setTimeout(() => {
//           console.log("Getting Your IP....");
//           resolve();
//         }, 5000);
//       }),
  
//       new Promise((resolve) => {
//         setTimeout(() => {
//           console.log("...................");
//           resolve();
//         }, 10000);
//       }),
  
//       new Promise((resolve) => {
//         setTimeout(() => {
//           console.log("...................");
//           resolve();
//         }, 12000);
//       }),
  
//       new Promise((resolve) => {
//         setTimeout(() => {
//           console.log("...................");
//           resolve();
//         }, 13000);
//       }),
  
//       new Promise((resolve) => {
//         setTimeout(() => {
//           console.log("Geting Your IP...80%");
//           resolve();
//         }, 8000);
//       }),
  
//       new Promise((resolve) => {
//         setTimeout(() => {
//           console.log("Geting Your IP...90%");
//           resolve();
//         }, 9000);
//       }),
  
//       new Promise((resolve) => {
//         setTimeout(() => {
//           console.log("Geting Your IP...100%");
//           resolve();
//         }, 10000);
//       }),
  
//       new Promise((resolve) => {
//         setTimeout(() => {
//           console.log("...................");
//           resolve();
//         }, 9000);
//       }),
  
//       new Promise((resolve) => {
//         setTimeout(() => {
//           console.log("Succesfully get your IP");
//           resolve();
//         }, 14000);
//       }),
  
//       new Promise((resolve) => {
//         setTimeout(() => {
//           console.log("Your IP : 192.168.122.9");
//           resolve();
//         }, 6000);
//       }),
//     ]);
//   }
  
//   // Memulai semua tugas secara konkuren
//   startTasks();

// 2.b buat promise

// let condition = true;
// const newPromise = new Promise ((resolve, reject) => {
//     if (condition) {
//         resolve("Berhasil");
//     } else {
//         reject("Gagal");
//     }
// });

// //pakai promise
// newPromise.then((result) => {
//     console.log(result);
// });

//pakai ASYNC
// Digunakan pada fungsi saja

const consumePromise = async() => {
    let result = await
}
  