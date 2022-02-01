// Rest Parameter

// function rest(a,b, ...myArgs){
//     // return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
    
//     // outputnya array 
//     return myArgs;
//     // return Array.from(arguments);
//     // return [...arguments];
// }

// console.log(rest(1, 2, 3, 4, 5, 6));

// menjumlahkan value

// function jumlahkan(...angka){
//     // let total = 0;
//     // for(const a of angka){
//     //     total += a;
//     // }
//     // return total;

//     return angka.reduce((a,b) => a+b);
// }

// console.log(jumlahkan(1,2,3,4,5));

// array destructuring using rest parameter

// const kelompok1 = ['Arisandi','Ambara','Rahayu','Sudarma','Budi'];

// // context : nama yang muncul pertama = ketua, nama yg muncul ke-2 = wakil ketua, sisanya anggota.

// const [ketua,wakil, ...anggota] = kelompok1;

// console.log(ketua);
// console.log(wakil);
// console.log(...anggota);

// object destructuring using rest parameter

// const team = {
//     pm : 'Arisandi',
//     frontEnd1 : 'Darma',
//     frontEnd2 : 'Bida',
//     backEnd : 'Angga',
//     uiux : 'Badi',
//     devOps : 'Kimmy' 
// }

// const {pm, ...myTeam} = team;

// console.log(pm);
// console.log(myTeam);

//filtering dengan rest parameter

// filter berdasarkan tipe data 

function filterBy(type, ...values){
    return values.filter(v => typeof(v) === type);
}

console.log(filterBy('number',2,4,'Arisandi',false,1.3,true,'Mika'));