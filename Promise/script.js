// fetch('http://www.omdbapi.com/?apikey=687f67d&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response));

// Promise ===================================
    // Object yang merepresentasikan berhasil / gagalnya sebuah event yang asynchronous di masa yang akan datang
    // janji ada 2 kondisi (terpenuhi / diinkari)
    // di js namanya "states(fulfilled /rejected / pending)"
        // callback (resolve) 'jika jaji terpenuhi
            // aksi (then) akan dijalankan jika terpenuhi
        // callback (reject) 'jika jaji diingkari
            // aksi (catch) akan dijalankan jika diingkari
        // callback (resolve) 'jika waktu tunggu selesai (terpenuhi/tidak)

// Promise Sederhana ============================
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati){
//         resolve('Janji telah ditepati');
//     }else{
//         reject('Janji diingkari')
//     }
// })

// janji1
//     .then(response => console.log('OK!: ' + response))
//     .catch(response => console.log('NOT OK!: ' + response));


// Contoh Promise ke-2=============================
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if(ditepati){
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa saat...')
//         }, 2000);
//     }else{
//         setTimeout(() => {
//             reject('Tidak ditepati setelah beberapa waktu...')
//         }, 2000);
//     }
// });

// console.log('start');
// console.log(janji2
//     .then(response => console.log('result = ' + response))
//     .catch(response => console.log('result = ' + response)));
// console.log('finish');


// Promise.all ==================================
    // jalanin semua promise sekaligus jika ada banyak

    // Promise dibawah belum ada reject

// promise 1
const film = new Promise( resolve => {
    setTimeout(() => {
        // isi resolve = array of object "[{ data }]"
        resolve([{
            judul: 'Avengers',
            sutradara: 'Arisandi Y',
            pemeran: 'Pepegaman, Waduhek'
        }])
    }, 1000);
});

// promise 2
const cuaca = new Promise( resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Denpasar',
            temp: 30,
            Kondisi: 'Cerah'
        }])
    }, 500);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

// Jalanin sekaligus

Promise.all([film, cuaca])
    // .then(response => console.log(response));

    // misahin array pake spread operator
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    })