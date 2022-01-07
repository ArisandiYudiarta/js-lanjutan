//ARROW FUNCTION

// standard function expression===============================

// const tampilNama = function (nama){
//     return `Halo, ${nama}`;
// }

// console.log(tampilNama('Arisandi'));


// versi arrow functionnya=====================================

// const tampilNama = (nama) => {return `Halo, ${nama}`};

// console.log('Arisandi');

//dengan 2 variabel============================================

// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }

// console.log(tampilNama('Arisandi','Pagi'));

//implisit return (return gausah ditulis, jika isi function hanya return)
//khusus 1 parameter tidak isi kurung

// const tampilNama = nama => `Halo, ${nama}`;

// console.log('Arisandi Yudiarta');

//tanpa parameter==============================================

// const tampilNama = () => `Hello!`;

// console.log(tampilNama());









// CONTOH REALISTIC USAGE OF ARROW FUNCTION
//pemetaan function kedalam array

let mahasiswa = ['Arisandi', 'Budi', 'Kades'];

//versi function biasa======================================
// let jumlahHuruf = mahasiswa.map(function(nama){
//     return nama.length;
// });

// console.log(jumlahHuruf);

//versi arrow function======================================

//mengembalikan dalam bentuk array
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

//mengembalikan dalam bentuk object
// let jumlahHuruf = mahasiswa.map(nama => ({
//     nama: nama,
//     jmlHuruf: nama.length
// }) );

// console.table(jumlahHuruf);



//KONSEP THIS PADA ARROW FUNCTION=============================

//Constructor function biasa

// const Mahasiswa = function(){
//     this.nama = 'Arisandi';
//     this.umur = 33;
//     this.sayHello = function(){
//         console.log(`Halo nama saya ${this.nama}, saya ${this.umur} tahun!`);
//     }
// }

// const arisandi = new Mahasiswa();
// arisandi.sayHello();

//Diubah menjadi Arrow function

// const Mahasiswa = function(){
//     this.nama = 'Arisandi';
//     this.umur = 19;
//     this.sayHello = () => {
//         console.log(`Halo nama saya ${this.nama}, saya ${this.umur} tahun!`);
//     }
// }

// const arisandi = new Mahasiswa();
// arisandi.sayHello();

// menggunakan object literal daripada constructor

// const mhs1 = {
//     nama : 'Arisandi',
//     umur : 19,
//     sayHello : () => {
//         console.log(`Halo nama saya ${this.nama}, saya ${this.umur} tahun!`);
//         console.log(this);
//     }
// }

// mhs1.sayHello(this);


// kasus1================


// const Mahasiswa = function(){
//     this.nama = 'Arisandi';
//     this.umur = 33;
//     this.sayHello = function(){
//         console.log(`Halo nama saya ${this.nama}, saya ${this.umur} tahun!`);
//     }
    
//     setInterval( () => {
//     console.log(this.umur++);
//     }, 500);
// }

// setInterval()



// PENGGUNAAN ARROW FUNCTION DI DUNIA NYATA========================
//pakai html juga ada yg ditambah

const box = document.querySelector('.box');

box.addEventListener('click', function(){

    let one = 'size';
    let two = 'caption';

    if(this.classList.contains(one)){
        [one, two] = [two, one];
    }

    this.classList.toggle(one);
    setTimeout(() => {
        this.classList.toggle(two);
    },600);
});

