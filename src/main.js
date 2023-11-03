import {API_KEY,READ_API_KEY} from './secrets.js'

console.log(API_KEY);
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w300'

const trandingSection = document.getElementById("tranding")

async function getTrendingMoviesPreview() {
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY)
    const data = await res.json()
    const movies = data.results

    console.log(movies);
    
    movies.forEach(movie => {
        const movieContainer =  document.createElement('div')
        movieContainer.setAttribute('class', 'movie-container') 
        const movieImg = document.createElement('img')
        movieImg.setAttribute('alt',movie.title);
        movieImg.setAttribute('class', 'movie-img') 
        movieImg.setAttribute('src',`${IMAGE_BASE_URL}${movie.poster_path}`)
        trandingSection.append(movieContainer)
        movieContainer.append(movieImg)

        console.log(movieImg);
    });

    
}

getTrendingMoviesPreview()

