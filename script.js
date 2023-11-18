const API_URL =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=b5885d493bbaf8ab090e423b57f801bc&language=en-US&page=1";
const IMG_URL = "https://image.tmdb.org/t/p/w1280";
const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=b5885d493bbaf8ab090e423b57f801bc&query"';

// Getting the initial movies...
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.results);
}
