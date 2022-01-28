// FOR..OF VS FOR..IN===================================================//

//for..of =====================================================

// looping array ===============================
const mhs = ['Adi','Maki','Dio'];

//for biasa ===========================
// for(let i = 0; i < mhs.length; i++){
//     console.log(mhs[i]);
// }

// forEach ============================

// mhs.forEach((m) => console.log(m));

// for..of ============================

// for( const m of mhs){
//     console.log(m);
// }

// looping string ==============================
const nama = 'Arisandi';

// for(const n of nama){
//     console.log(n);
// 

const mhs2 = ['Adi','Maki','Dio'];
// parameter Array.forEach ada 2 (representasi array, index)

// forEach=====
// mhs2.forEach((m, i) => {
//     console.log(`${m}, adalah mahsiswa ke- ${i}`);
// });

// for..of===== 
// for(const [i,m] of mhs.entries()) {
//     console.log(`${m}, adalah mahsiswa ke-${i+1}`);
// }

// //NodeList=====================================
// const liNama = document.querySelectorAll('.nama');

// // ======================
// liNama.forEach(n => console.log(n.textContent));

// // ======================
// for(n of liNama){
//     console.log(n.textContent);
// }

// Arguments===================================
// forEach dan reduce hanya bisa mengiterasi array
// akan tetapi for..of bisa mengiterasi argument

// function jumlahAngka(){
//     // .reduce 
//     // return arguments.reduce((a,i) => a + i);

//     // .forEach 
//     let jumlah=0;
//     // arguments.forEach(a => jumlah += a);

//     // for..of 
//     for(a of arguments){
//         jumlah += a;
//     }
//     return jumlah;
// }
// console.log(jumlahAngka(1,2,3,4,5));

// for..in ========================================================

const mhs3 = {
    nama: 'Arisandi',
    nim: 200040011,
    kelas: 'BA204'
}

for(m in mhs3){
    console.log(m);
    console.log(mhs3[m]);
}

