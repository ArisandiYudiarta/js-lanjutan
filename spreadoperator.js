// Spread Operator======================================================//
// memecah iterables menjadi single element 
// ditandakan dengan "...<variabel>"

const mhs = ['Arisandi','Yudiarta','Putu'];
console.log(...mhs);
console.log(...mhs[1]);

// Penggunaan Spread Operator=======================================

// menggabungkan 2 array ==========

// const mhs = ['Arisandi','Yudiarta','Putu'];
// const dosen = ['Suniantara','Aryo','Didit'];
// const combined = [...mhs, ...dosen];

// console.log(combined);


// copy nilai array ===============

// const mhs = ['Arisandi','Yudiarta','Putu'];
// const mhs1 = [...mhs];
// mhs1[0] = 'Ari';
// console.log(mhs1);
// console.log(mhs);

// menghubungkan dengan html =======

// const nama = document.querySelectorAll("ul li");
// const mhs = [...nama].map(n => console.log(n.textContent));

// hover each letter ( singling string) and style ech one of it

const nama = document.querySelector('.nama');
const huruf  = [...nama.textContent].map(h =>`<span>${h}</span>`).join('');
nama.innerHTML = huruf;


 