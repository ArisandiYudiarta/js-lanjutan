// ambil semua elemen video
const video = Array.from(document.querySelectorAll('[data-duration]'));

//pilih hanya yang 'JAVASCTIPR LANJUTAN'
const vidfiltered = video.filter(v => v.textContent.includes('JAVASCRIPT LANJUTAN'))

//ambil durasi masing" video
    .map(item => item.dataset.duration)

//ubah durasi ke float, lalu ubah ke detik
    .map(waktu =>{
        //value yang di return = 10:30 => [10,30] menggunakan "split"
        const parts = waktu.split(':').map(part => parseFloat(part));
        return parts[0] * 60 + parts[1];
    })
//jumlahkan durasi 
    .reduce((total, detik) => total + detik);

//convert menjadi format jam:menit:detik
    let h = Math.floor(vidfiltered / 3600);
    let m = Math.floor(vidfiltered % 3600 / 60);   
    let s = Math.floor(vidfiltered % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";

//simpan di DOM

const showDuration = document.querySelector('.total-durasi');
showDuration.textContent = `${hDisplay}${mDisplay}${sDisplay}`
// showDuration.textContent = `${h} Jam, ${m} Menit, ${s} Detik.`
console.log(showDuration);