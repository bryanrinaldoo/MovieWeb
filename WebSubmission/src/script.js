import "./style/style2.css";
//API
const API_KEY = 'api_key=27d5a4725e46e1a8985cb31476773406';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const search_URL = BASE_URL + '/search/movie?' + API_KEY;

//HTML
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');


getMovies(API_URL);

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMovies(data.results);
    })
}

function showMovies(data) {
    main.innerHTML ='';

    data.forEach(movie => {

        const {title, poster_path, vote_average, overview} = movie;
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie');
        movieContainer.innerHTML = `
        <img src="${IMG_URL+poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getColor(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${overview}
        </div>`

        main.appendChild(movieContainer);
    })
}

function getColor(vote) {
    if(vote>=8){
        return 'green';
    }else if(vote>=5){
        return 'orange';
    }else{
        return 'red';
    }
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm){
        getMovies(search_URL+'&query='+searchTerm);
    }else{
        getMovies(API_URL);
    }
})