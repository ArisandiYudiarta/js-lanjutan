// $('.search-button').on('click', function (){
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=687f67d&s=' + $('.input-keyword').val(),
//         success: results => {
//             const movies = results.Search;
//             console.log(movies);
//             let cards = '';
//             movies.forEach(m => {
//                 cards += showCards(m);
//             })
//             $('.movie-container').html(cards);
    
//             // tombol detail di klik 
    
//             $('.modal-detail-btn').on('click', function(){
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=687f67d&i=' + $(this).data('imdbid'),
//                     success: m => {
//                         const movieDetail = showMovieDetails(m);
//                         $('.modal-body').html(movieDetail);
//                     },
//                     error: (e) => {
//                         console.log(e.responseText);
//                     }
//                 });
//             });
            
//         },
//         error: (e) => {
//             console.log(e.responseText);
//         }
//     });
// });

const searchBtn = document.querySelector('.search-button');
searchBtn.addEventListener('click', function(){

    const inputKeyword = document.querySelector('.input-keyword');
    fetch('http://www.omdbapi.com/?apikey=687f67d&s=' + inputKeyword.value)
        .then(response => response.json())
        .then(response => {
            const movies = response.Search;
            let cards ='';
            movies.forEach(m => cards += showCards(m));

            const movieContainer = document.querySelector('.movie-container');
            movieContainer.innerHTML = cards;
            
            //saat btn detail di klik
            const btnDetail = document.querySelectorAll('.modal-detail-btn');
            // hasilnya = nodelist / array jadi gabisa langsung dikasi eventHandler
                btnDetail.forEach(b => {
                    b.addEventListener('click', function(){
                        const imdbid = this.dataset.imdbid;
                        fetch('http://www.omdbapi.com/?apikey=687f67d&i=' + imdbid)
                            .then(response => response.json())
                            .then(m => {
                                const movieDetail = showMovieDetails(m);
                                const modalBody = document.querySelector('.modal-body')
                                modalBody.innerHTML = movieDetail;
                            });
                    });
                });
        });
});



function showCards(m){
    return `<div class="col-md-4 my-3">
    <div class="card"">
        <img src="${m.Poster}" class="card-img-top" >
        <div class="card-body">
        <h5 class="card-title">${m.Title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
        <a href="#" class="btn btn-primary modal-detail-btn" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
        </div>
    </div>                
</div>`;
}

function showMovieDetails(m){
    return `<div class="container-fluid">
    <div class="row">
        <div class="col-md-3">
            <img src="${m.Poster}" class="img-fluid">
        </div>
        <div class="col-md">
            <ul class="list-group">
                <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                <li class="list-group-item"><strong>Director : </strong> ${m.Director}</li>
                <li class="list-group-item"><strong>Actors : </strong> ${m.Actors}</li>
                <li class="list-group-item"><strong>Writer : </strong> ${m.Writer}</li>
                <li class="list-group-item"><strong>Plot : </strong><br>${m.Plot}</li>
            </ul>
        </div>
    </div>
</div>`;
}