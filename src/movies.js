// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((movie) => movie.director);
  return directors;
}

const directorsArray = getAllDirectors(movies);
console.log(directorsArray);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergDramas = moviesArray.filter((movie) => {
    return (
      movie.genre.includes('Drama') && movie.director === 'Steven Spielberg'
    );
  });

  return spielbergDramas.length;
}

const dramaCount = howManyMovies(movies);
console.log(dramaCount);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const totalScores = moviesArray.reduce((total, movie) => {
    return total + (movie.score || 0);
  }, 0);

  const averageScore = totalScores / movies.length;
  return parseFloat(averageScore.toFixed(2));
}

const average = scoresAverage(movies);
console.log(average);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) => movie.genre.includes('Drama'));
  const total = dramaMovies.reduce((total, movie) => {
    return total + (movie.score || 0);
  }, 0);
  const avg = total / dramaMovies.length;
  return parseFloat(avg.toFixed(2));
}

const averageDramaScore = dramaMoviesScore(movies);
console.log(averageDramaScore); 


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedMovies = [...moviesArray];

  sortedMovies.sort((a, b) => {
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;
  
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });

  return sortedMovies;
}

const sortedMovies = orderByYear(movies);
console.log(sortedMovies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedMovies = [...moviesArray];

  sortedMovies.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });

  const first20Titles = sortedMovies.slice(0, 20).map((movie) => movie.title);
  return first20Titles;
}

const first20Titles = orderAlphabetically(movies);
console.log(first20Titles);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
