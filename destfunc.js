// DESTRUCTURING FUNCTION===============================================//

// CASE 1 ========================================/
// Destructuring function return value============

// function calc(a,b){
//     return [a+b, a-b, a*b];
// }

// assign function biasa==================
// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];

// console.log(jumlah);
// console.log(kali);

// menggunakan destructuring function===== 
// const [tambah, kurang, kali, bagi='tidak ada'] = calc(2,3);
// console.log(bagi);

//assign value tidak harus berurutan tapi return value harus menggunakan object====================================
// function calc(a,b){
//     return{
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const {kurang: k, bagi, kali, tambah} = calc(3,5);
// console.log(bagi);
// console.log(k);

// CASE 2============================================/
// Destructuring function arguments==================

// tanpa destructuring=====================
const mhs1 = {
    nama: 'Arisandi Yudiarta',
    umur: 19,
    nim: 200040011,
    nilai: {
        tugas: 90,
        uts: 88,
        uas: 89
    }
}

// function showMhs(nama, umur){
//     return `Halo! nama saya ${nama}, saya ${umur} tahun.`;
// }

// console.log(showMhs(mhs1.nama, mhs1.umur));

// menggunakan destructuring=================
//destructuring langsung di argumen===
function showMhs({nama, umur, nilai: {tugas, uts, uas}}){
    return `Halo! nama saya ${nama}, saya ${umur} tahun. Nilai UAS saya ${uas}`;
}

// langsung mengirim object dan akan di pecah di argument=====
console.log(showMhs(mhs1));