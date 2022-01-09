// Tagged Templates
// const nama = 'Arisandi Yudiarta';
// const umur = 19;

// // "...<nama parameter> akan menjadi array ang menampung expression pada variabel str"
// function coba(strings, ...values){

//     // let result = '';
//     // strings.forEach((str, index)=> {
//     //     result += `${str}${values[index] || ''}`
//     // })
//     // return result;

//     //pake reduce==================

//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`,'');
// }

// const str  = coba`Halo! nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// Contoh implementasi (Highlight)==============================

const nama = 'Arisandi Yudiarta';
const umur = 19;
const email = 'arisandi210802@gmail.com'

// "...<nama parameter> akan menjadi array ang menampung expression pada variabel str"
function highlight(strings, ...values){
    return strings.reduce((result, str, i) => `${result}${str}<span class ="hl">${values[i] || ''}</span>`,'');
}

const str  = highlight`Halo! nama saya ${nama}, saya ${umur} tahun, email saya ${email}.`;
console.log(str);

document.body.innerHTML = str;