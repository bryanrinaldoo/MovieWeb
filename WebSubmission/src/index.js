import './style/style.css';
import './script/slider.js';
import $ from 'jquery';
import './script/component/my-footer.js';
import './script/component/pagination-bar.js';
import logoImg from '../src/img/logo.png';

//API
const API_KEY = 'api_key=27d5a4725e46e1a8985cb31476773406';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const API_URL_NEW = BASE_URL + '/movie/upcoming?' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const search_URL = BASE_URL + '/search/movie?' + API_KEY;
const genres = [
    {
        'id': 28,
        'name': 'Action'
    },
    {
        'id': 12,
        'name': 'Adventure'
    },
    {
        'id': 35,
        'name': 'Comedy'
    },
    {
        'id': 80,
        'name': 'Crime'
    },
    {
        'id': 18,
        'name': 'Drama'
    },
    {
        'id': 10751,
        'name': 'Family'
    },
    {
        'id': 14,
        'name': 'Fantasy'
    },
    {
        'id': 27,
        'name': 'Horror'
    },
    {
        'id': 10749,
        'name': 'Romance'
    },
    {
        'id': 10770,
        'name': 'TV Movie'
    },
    {
        'id': 53,
        'name': 'Thriller'
    }
];



//HTML
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const tags = document.getElementById('tags');
const splideList = document.querySelector('.splide__list');
const header = document.querySelector('.header');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const current = document.getElementById('current');

let selectedGenre = [];
function setGenre(){
    tags.innerHTML = '';
    genres.forEach(genre =>{
        const tag = document.createElement('div');
        tag.classList.add('tag');
        tag.id = genre.id;
        tag.innerText = genre.name;
        tag.addEventListener('click', () =>{
            if(selectedGenre == 0){
                selectedGenre.push(genre.id);
            }
            else{
                if(selectedGenre.includes(genre.id)){
                    selectedGenre.forEach((id, idx) =>{
                        if(id == genre.id){
                            selectedGenre.splice(idx, 1);
                        }
                    });
                }
                else{
                    selectedGenre.push(genre.id);
                }
            }
            getMovies(API_URL + '&with_genres=' + encodeURI(selectedGenre.join(',')));
            highlightSelected();
        });
        tags.append(tag);
    });
}

function highlightSelected(){
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag =>{
        tag.classList.remove('highlight');
    });
    clearBtn();
    if(selectedGenre.length !== 0){
        selectedGenre.forEach(id =>{
            const highlightedTag = document.getElementById(id);
            highlightedTag.classList.add('highlight');
        });
    }
}

function clearBtn(){
    const clearBtn = document.getElementById('clear');
    if(clearBtn){
        clearBtn.classList.add('highlight');
    }
    else{
        let clear = document.createElement('div');
        clear.classList.add('tag', 'highlight');
        clear.id ='clear';
        clear.innerText ='Clear';
        clear.addEventListener('click', ()=>{
            selectedGenre = [];
            setGenre();
            getMovies(API_URL);
        });
        tags.append(clear);
    }
}

function getMovies(url) {
    lastURL = url;
    fetch(url).then(res => res.json()).then(data => {
        if(data.results.length !== 0){
            showMovies(data.results);
            currentPage = data.page;
            nextPage = currentPage + 1;
            prevPage = currentPage - 1;
            totalPages = data.total_pages;

            current.innerText = currentPage;
            if(currentPage <= 1){
                prev.classList.add('disabled');
                next.classList.remove('disabled');
            }else if( currentPage >= totalPages){
                next.classList.add('disabled');
                prev.classList.remove('disabled');
            }else{
                next.classList.remove('disabled');
                prev.classList.remove('disabled');
            }
        }
        else{
            main.innerHTML = '<h1 class=\'notFound\'> No Results Found </h1>';
        }
    });
}


function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {

        const {
            title,
            poster_path,
            vote_average,
            overview
        } = movie;
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie');
        movieContainer.innerHTML = `
        <img src='${poster_path ? IMG_URL+poster_path : 'https://via.placeholder.com/300x450'}' alt='${title}'>
        <div class='movie-info'>
            <h3>${title}</h3>
            <span class='${getColor(vote_average)}'>${vote_average}</span>
        </div>
        <div class='overview'>
            <h3>Overview</h3>
            ${overview}
        </div>`;

        main.appendChild(movieContainer);
    });
}

function getSlides(url) {
    fetch(url).then(res => res.json()).then(data => {
        if(data.results.length !== 0){
            showSlides(data.results);
        }
        else{
            main.innerHTML = '<h1 class=\'notFound\'> No Results Found </h1>';
        }
    });
}

function showSlides(data) {
    splideList.innerHTML = '';

    const temp = [];
    data.every(movie => {
        const {
            title,
            backdrop_path,
            overview,
            release_date
        } = movie;
        const movieSlide = document.createElement('li');
        movieSlide.classList.add('splide__slide');
        movieSlide.innerHTML = `
        <img src='${backdrop_path ? IMG_URL+backdrop_path : 'https://via.placeholder.com/300x450'}' alt='${title}'>
        <div class='overview'>
            <h3>${title}</h3>
            ${overview}
            <br><br>
            <span class='date'>${release_date}</span>
        </div>`;
    
        splideList.appendChild(movieSlide);
        
        temp.push(1);
        if(temp.length == 9){
            return false;
        }
        return true;
    });

}

function getColor(vote) {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;
    selectedGenre =[];
    setGenre();
    if (searchTerm) {
        getMovies(search_URL + '&query=' + searchTerm);
        main.scrollIntoView();
    } else {
        getMovies(API_URL);
    }
});

function addLogo(){
    const logo = document.createElement('img');
    logo.src = logoImg;
    header.prepend(logo);
}




let currentPage =1;
let nextPage =1;
let prevPage =1;
let lastURL ='';
let totalPages = 

next.addEventListener('click', ()=>{
    if(nextPage <= totalPages){
        changePage(nextPage);
    }
});

prev.addEventListener('click', ()=>{
    if(prevPage > 0){
        changePage(prevPage);
    }
});
function changePage(page){
    let urlSplit = lastURL.split('?');
    let query = urlSplit[1].split('&');
    let key = query[query.length - 1].split('=');
    if(key[0] != 'page'){
        let url = lastURL + '&page=' + page;
        getMovies(url);
        tags.scrollIntoView();
    }
    else{
        key[1] = page.toString();
        let a = key.join('=');
        query[query.length - 1] = a;
        let b = query.join('&');
        let url = urlSplit[0] + '?' + b;
        getMovies(url);
        tags.scrollIntoView();
    }
}

$( document ).ready(function() {
    // Handler for .ready() called.
    addLogo();
    setGenre();
    getMovies(API_URL);
    getSlides(API_URL_NEW);
});


//RESPONSIVE
