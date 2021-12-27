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
let jumlahHuruf = mahasiswa.map(nama => ({
    nama: nama,
    jmlHuruf: nama.length
}) );

console.table(jumlahHuruf);
