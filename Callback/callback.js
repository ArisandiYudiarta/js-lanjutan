// Callback ============================================================// 

//Synchronous Callback

// // function halo(nama){
// //     alert(`Halo ${nama}`);
// // }

// function tampilkanPesan(callback){
//     const nama = prompt('Masukkan Nama : ');
//     callback(nama);
// }
// tampilkanPesan(nama => alert(`Halo, ${nama}`));


// // Asnychronous Function (VANILLA JS)(RUN MENGGUNAKAN LIVE SERVER)
function getDataMahasiswa(url, success, error){
    let ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function(){
        if(ajax.readyState === 4){
            if(ajax.status === 200){
                success(ajax.response);
            }else if(ajax.status === 404){
                error();
            }
        }
    }
    ajax.open('get', url);
    ajax.send();
}

// console.log('mulai');
// getDataMahasiswa('data/mahasiswa.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {});
// console.log('selesai');

// Asnychronous Function (JQUERY)(RUN MENGGUNAKAN LIVE SERVER)
// console.log('start');
// $.ajax({
//     url: 'data/mahasiswa.json',
//     success : (mhs) => {
//         mhs.forEach(m => console.log(m.nama));
//     },
//     error : (e) => {
//         console.log(e.responseText);
//     }

// })
// console.log('finish');
