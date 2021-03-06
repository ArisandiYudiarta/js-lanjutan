// object revisited

// 1. Object Iteration============================================

//PROBLEM : repeating urself

// // Object 1
// let mahasiswa1 = {
//     //property
//     nama: 'Arisandi Yudiarta',
//     energy: 10,
//     //method
//     makan: function(porsi){
//         this.energy = this.energy + porsi;
//         console.log(`Haloo ${this.nama}, Selamat makan!`);
//     }
// }

// // Object 2
// let mahasiswa2 = {
//     //property
//     nama: 'Ambara Jaya',
//     energy: 130,
//     //method
//     makan: function(porsi){
//         this.energy = this.energy + porsi;
//         console.log(`Haloo ${this.nama}, Selamat makan!`);
//     }
// }

//2. Function Declaration=========================================

//ini yang dihubungkan
// const methodMahasiswa = {

//     makan: function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat makan!`);
//     },

//     main:  function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat bermain!`);
//     },

//     tidur: function(jam){
//         this.energi += jam*2;
//         console.log(`Halo ${this.nama}, Silahkan tidur!`);
//     },

// };

// function Mahasiswa(nama, energi){
//     // menghubungkan dengan object diatas.
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }
// // Object 1
// let arisandi = Mahasiswa('Arisandi', 100);
// // Object 2
// let ambara = Mahasiswa('Ambara', 100);

//the only thing u only use really.
//3. Constructor Function=========================================
//keyword new
// function Mahasiswa(nama, energi){
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat makan!`);
//     }

//     this.main = function(jam){
//         this.energi -= jam*10;
//         console.log(`Halo ${this.nama}, Selamat bermain!`);
//     }
// }

// let arisandi = new Mahasiswa('Arisandi', 100);


// Prototype=========================================

// Prototype inheritance

// function Mahasiswa(nama, energi){
//     // let mahasiswa = Object.create(methodMahasiswa);
//     this.nama = nama;
//     this.energi = energi;
// }

// //deklarasi method menggunakan prototype
// Mahasiswa.prototype.makan = function (porsi){
//     this.energi += porsi;
//     return `Halo ${this.nama}, Selamat makan!`;
// }

// Mahasiswa.prototype.main = function (jam){
//     this.energi -= jam;
//     return `Selamain bermain ${this.nama}!`;
// }

// Mahasiswa.prototype.tidur = function(jam){
//     this.energi += jam*2;
//     return `Silahkan tidur ${this.nama}`;
// }

// let arisandi = new Mahasiswa('Arisandi', 100);

// OOP (ver class)

class Mahasiswa{
    constructor(nama, energi){
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi){
        this.energi += porsi;
        return `Halo ${this.nama}, Selamat makan!`;
    }

    main(jam){
        this.energi -= jam;
        return `Halo ${this.nama}, Selamat bermain!`;
    }

    tidur(jam){
        this.energi += jam*2;
        return `Halo ${this.nama}, Selamat tidur!`;
    }
}

let arisandi = new Mahasiswa('Arisandi', 100);
let  = new Mahasiswa('Ambara', 100);