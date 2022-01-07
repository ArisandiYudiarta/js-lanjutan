// FILTER===================================================================
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3  =======================

// pakai "for" biasa====

// const angka2 = [];
// for(let i = 0; i < angka.length; i++){
//     if(angka[i] >= 3){
//         angka2.push(angka[i]);
//     }
// }

//pakai FILTER====

// const angka2 = angka.filter(function(a){
//     return a >= 3;
// });

// console.log(angka2);

//FILTER + pakai arrow function====

// const angka2 = angka.filter(a => a >= 3);
// console.log(angka2);


//MAP=======================================================================

// kali 2 semua angka dalam array====

// const angka2 = angka.map(a => a * 2);
// console.log(angka2);

//REDUCE====================================================================

// jumlahkan semua value array====
// -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// const angka2 = angka.reduce((accumulator, currentValue) => accumulator + currentValue)
// console.log(angka2);

//METHOD CHAINING===========================================================
// cari angka > 5
// kali 3
// jumlah 

// menggunakan "." langsung setelah function 

const hasil = angka.filter(a => a > 5)// hasil = 8,9,9
 .map(a => a*3)// hasil = 24,27,27
 .reduce((acc, currVal) => acc + currVal);

console.log(hasil);

