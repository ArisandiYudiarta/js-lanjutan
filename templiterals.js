//TEMPLATE LITERALS/ TEMPLATE STRING====  

// const nama = 'Arisandi';
// const umur = 19;
// console.log(`Halo, Nama saya ${nama}, dan saya ${umur} tahun`);

// Embedded expression==================

// console.log(`${alert('halo')}`);
// const x = 11;
// console.log(`${(x % 2 == 0) ? 'benar' : 'salah'}`);

//HTML Fragments

// const mhs = {
//     nama: 'Arisandi',
//     umur: 19,
//     nim:200040011,
//     email: 'arisandiyudiarta21@gmail.com' 
// }

// const el = `<div class="mhs">
//     <h2 class="">${mhs.nama}</h2>
//     <span class="nim">${mhs.nim}</span>
// </div> `;

// document.body.innerHTML = el;

//LATIHAN TEMPLATE LITERALS===============================================

// 1. InnerHTML=====================================================

//HTML Fragments

// const mhs = {
//     nama: 'Arisandi',
//     umur: 19,
//     nim:200040011,
//     email: 'arisandiyudiarta21@gmail.com' 
// }

// const el = `<div class="mhs">
//     <h2 class="">${mhs.nama}</h2>
//     <span class="nim">${mhs.nim}</span>
// </div> `;

// document.body.innerHTML = el;

// 2.  Looping=====================================================

// const mhs = [
//     {
//         nama:'Arisandi',
//         nim:'200040011'
//     },
//     {
//         nama:'Dodi',
//         nim:'200040012'
//     },
//     {
//         nama:'Iqbal',
//         nim:'200040013'
//     },
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>   
//         <li>${m.nim}</li>
//     </ul>`).join('')}
// </div>`

// document.body.innerHTML = el;

//3. Conditional=====================================================

// ternary operator

// const lagu = {
//     judul: 'Kau Adalah',
//     penyanyi: 'Daka',
//     feat: 'Pierro'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`;

// document.body.innerHTML = el;

// 4. Nested==========================================================
//HTML Fragments bersarang

const mhs = {
    nama: 'Arisandi Yudiarta',
    semester: '3',
    matkul:[
        'Statistika',
        'Technopreneurship',
        'Web',
        'Jaringan Komputer',
        'Prak. Jaringan Komputer'
    ]
}

function showDataStudents(matkul){
    return` 677777777777
        <ol>
            ${matkul.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `;
}

const el = `<div class="mhs">
    <h2>Nama : ${mhs.nama}</h2>
    <span class="semester">Semester: ${mhs.semester}</span>
    ${showDataStudents(mhs.matkul)}
</div>`;

document.body.innerHTML = el;