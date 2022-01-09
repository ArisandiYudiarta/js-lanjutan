// const test = ['satu','dua','tiga','empat'];

// const [a,b,c,d] = test;

// console.log(a);

// const mhs = {
//     nama : 'Arisandi',
//     umur : 19
// }

// const {nama,umur} = mhs;

// console.log(umur);

// DESTRUCTURING VARIABLES/ASSIGNMENT===================================||

// Destructuring Array

// const perkenalan = ['Halo','nama','saya','Arisandi Yudiarta'];

// const [salam, satu, dua, nama] = perkenalan; 

// skipping items==============================

// const [salam, , , nama] = perkenalan; 
// console.log(salam);

// swap items==================================

// let a = 1;
// let b = 2;

// console.log(a);
// console.log(b);

// [a,b] = [b,a];

// console.log(a);
// console.log(b);

// return value pada function===================

// function coba(){
//     return [1,2];
// }

// //cara biasanya
// // const a = coba();
// // console.log(a[1]);
// // console.log(a[2]);

// //menggunakan destructuring variables
// const [a,b] = coba();

// console.log(a);
// console.log(b);

// rest parameter================================

// const [a, ...values] = [1,2,3,4,5,6];

// console.log(a);
// console.log(values);

// DESTRUCTURING OBJECT=================================================||

// const mhs = {
//     nama : 'Arisandi',
//     umur : 19
// }

// const {nama,umur} = mhs;
// console.log(umur);

// Assigment tanpa deklarasi object==============
// gausah deklarasi object, langsung masukin ke dalam destructuringnya tapi harus diisi kurung buka dan tutup seperti dibawah.

// ({nama,umur} = {
//     nama : 'Arisandi',
//     umur : 19
// });
// console.log(umur);

// Assign ke variabel baru yang berbeda===========

// const mhs = {
//     nama : 'Arisandi',
//     umur : 19
// }

// const {nama: n, umur: u} = mhs;
// console.log(n);

// Memberikan default value======================= 

// const mhs = {
//     nama : 'Arisandi',
//     umur : 19
// }

// const {nama,umur, email = 'arisandiyudiarta21@gmail.com'} = mhs;
// console.log(email);

// Memberikan default value + assign ke variabel baru===

// const mhs = {
//     nama : 'Arisandi',
//     umur : 19
// }

// const {nama: n, umur: u, email: e = 'arisandiyudiarta21@gmail.com'} = mhs;
// console.log(e);

// Rest Parameter version=========================

// const mhs = {
//     nama : 'Arisandi',
//     umur : 19,
//     email: 'arisandiyudiarta21@gmail.com'
// }

// const {nama, ...value} = mhs;
// console.log(value);

// Mengambil field pada object, setelah field dikirim sebagai parameter untuk function=====================================

const mhs = {
    id : 200040011,
    nama : 'Arisandi',
    umur : 19,
    email: 'arisandiyudiarta21@gmail.com'
}

// penggunan normal============
// function getIdMhs(mhs){
//     return mhs.id;
// };

// console.log(getIdMhs(mhs));

// dengan destructuring variable
function getIdMhs({id}){
    return id;
};

console.log(getIdMhs(mhs));



