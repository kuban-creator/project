const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели? ');

const personalMovieDb = {
  count: numberOfFilms,
  movies: {
    }, 
  actors: {
    }, 
  genres: [], 
  private: false
    };

const lastMovies = prompt (' Последний фильм который ты смотрел? ');
const rateMovies = prompt (' Оцените его ');

personalMovieDb.movies[lastMovies] = rateMovies;
console.log(personalMovieDb)