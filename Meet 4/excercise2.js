// pakai IFFI
let hasil = (function(angka) {
    return angka % 2 === 1 ? "Ganjil" : "Genap";
})(5);

console.log(hasil);

// pakai CALLBACK
function testing(angka, telfonBale) {
    let hasil = angka % 2 === 1 ? "Ganjil" : "Genap";
    telfonBale(hasil);
}

function fungsiPangge(hasil) {
    console.log(hasil);
}

testing(5, fungsiPangge);



