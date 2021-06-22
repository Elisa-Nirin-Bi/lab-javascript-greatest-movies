// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  let modifiedArr = arr.map((element) =>{return element.director})
  return modifiedArr
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  return movies.filter(
    (movie) =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr){
  if(!arr.length){
    return 0
  }
  const result = arr.reduce(function (sum, value){
    if(value.score){
    return (value.score + sum)
    } else{
      return sum
    }
  }, 0)
  
  const total = result / arr.length;
  
  return Number(total.toFixed(2))
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
 
  const dramaLength = movies.filter(function (movie) {return movie.genre.includes("Drama")})
  .reduce(function(val, movie){
    return val + 1;

  },0)
  if(!dramaLength){
    return 0
  }
   const dramaScore = movies.filter(function (movie) {return movie.genre.includes("Drama")})
  .reduce(function(val, movie){
    return val + movie.score;

  },0)
 
 
const resultAverage = dramaScore / dramaLength;

return Number(resultAverage.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr){
 
  return[...arr].sort((a, b) =>{
  if(a.year === b.year){
    return a.title.localeCompare(b.title);
  }else{
    return a.year - b.year
  }})

    }
  
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr){
  const twenty = arr.map(arr => arr.title)
  .sort()
  .slice(0, 20)
  
  return twenty
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {

  return arr.map(function(value) {
   let time = value.duration.split(" ");
   let hour = time.toString().replace(/h/g,' ');
   let minutes = hour.substring(3).replace(/min/g,' ');
   
   let newFormat = (Number(hour[0]) * 60) + Number(minutes);
  return  {...value, duration: newFormat}
  });
  
  }

  
  
    

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



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
    bestYearAvg,
  };
}
