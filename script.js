// These are the Private APIs for this project...
const API_URL =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=b5885d493bbaf8ab090e423b57f801bc&language=en-US&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=b5885d493bbaf8ab090e423b57f801bc&query="';

// These are the HTML elements for the further DOM manipulations....
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

// Getting the initial movies...
getMovies(API_URL);

// Its the function for fetching the data or informations from the API and convert it to JSON...
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}

// Its the method for showing movies from that JSON information onto the DOM...
function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `

        <img
          src="${IMG_PATH + poster_path}"
          alt="${title}"
        />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>OverView</h3>
          ${overview}
        </div>
  
  `;

    main.appendChild(movieEl);
  });
}

// Its the utility method for vote manipulations..
function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "yellow";
  } else {
    return "red";
  }
}

// This is eventlistener for the search and submit form...
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
