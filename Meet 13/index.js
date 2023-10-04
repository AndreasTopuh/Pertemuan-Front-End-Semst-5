//class in JS
//-----------

//object literal

//YANG LAMA PUNYA
// const mobil = {
//     transimisi: 'Manual',
//     bahanBakar: 120,
// };

//CLASS 
class Mobil {
    constructor(transmisi, bahanBakar, mesin){
        this.transmisi = transmisi
        this.bahanBakar = bahanBakar
        this.mesin = mesin
    }
}

// const mobil1 = new Mobil('Manual','ferrari', 5500);
// const mobil2 = new Mobil('Matic','ford', 3500);
// const mobil3 = new Mobil('Matic','VW', 41500);
// console.log(mobil1, mobil2, mobil3);

class Toyota extends Mobil {
    constructor(merek, warna, transmisi, bhanBakar) {
        
    }
}
