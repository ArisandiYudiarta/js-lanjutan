// CLOSURES

// contoh penjelasan

// function init(){
//     // let nama  = 'Arisandi';

//     return function(nama){
//         console.log(nama);
//     }
//     // return dipindah keatas dibuat menjadi anonymous function
//     // return tampilNama;
// }
// let panggilNama = init();
// panggilNama('Arisandi');




//Fungsi closure pertama================================

// Function factory=====================

function ucapSalam(waktu){
    return function(nama){
        console.log(`Halo ${nama}, Selamat ${waktu}!`);
    }
}

// gausah disi keyword "new" karena bukan object
// let pagi = ucapSalam('Pagi');
let siang =  ucapSalam('Siang');
let malam = ucapSalam('Malam');

//closure jalan sebelum bahkan function dipanggil
// console.dir(pagi);
// console.dir(siang);
// console.dir(malam);

//memanggil function untuk mengisi parameter dan mengeluarkan closure
ucapSalam('Pagi')('Arisandi');
siang('Dedek');
malam('Senna');



// fungsi ke 2==========================================

// seolah olah memiliki private variable===========


// // immediately invoked function
// // function dibungkus kurung => () lalu diisi kurung lagi setelahnya, "ex : var a = (function(){})() "untuk langsung menjalankan function setelah variabel dipanggil.
// let add = (function(){
//     let counter = 0;

//     return function(){
//         return ++counter;
//     }
// })();

// // immediately invoked function biar gausah disimpen ke variabel seerti dibawah lagi
// // let addAll = add();

// //agar gabisa di override sama counter dibawah
// counter = 9;

// console.log(add());
// console.log(add());
// console.log(add());