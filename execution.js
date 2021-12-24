// Execution Context, Hoisting & Scope

// Execution Context============================================

// console.log(nama);
// var nama = 'Arisandi';

//creation phase pada global context==============

//  - pengecekan variable, jika ada maka sistem membuat nama variable (var = undefined)
//  - jika ada function maka diisi kode function
//fase ini disebut "HOISTING";
// js mendefinisikan window = global obj
// js mengisi window = this;

//execution phase=================================

// // contoh kedua

// console.log(sayHello());

// var nama = 'Arisandi';
// var umur = '19';

// function sayHello(){
//     return `Halo nama saya ${this.nama}, saya ${this.umur} tahun!`;
// }

// JS VISUALIZER : visualisasi kode js (cari di google) 

// jika ketemu function, maka akan membuat local execution kontext. dimana js akan mengulangi creation dan execution.
//  - pada local execution selain bisa mengakses window, memiliki akses juga dengan argumen. dimana didalamnya juga ada hosting.


var nama = 'Arisandi Yudiarta';
var username = 'arisandiyudiarta';

function cetakURL(username){
    var url = 'http://instagram.com/';
    return url + username;
}

console.log(cetakURL(username));