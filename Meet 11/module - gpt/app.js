// app.js
import { tambah, kurang } from './math.js';

// Minta pengguna memasukkan nama menggunakan alert
let nama = prompt('Masukkan nama Anda:');

// Simpan nama yang dimasukkan oleh pengguna ke dalam variabel
if (nama !== null) {
  alert('Halo, ' + nama + '! Selamat datang.');
} else {
  alert('Anda tidak memasukkan nama.');
}

let hasilTambah = tambah(5, 3);
console.log('Hasil penjumlahan: ' + hasilTambah);

let hasilKurang = kurang(8, 2);
console.log('Hasil pengurangan: ' + hasilKurang);
