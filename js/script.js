"use strict";

const numberOfFilms = prompt("How many movies have you watched?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

if(personalMovieDB.count < 10 && personalMovieDB.count >= 0){
    alert("You haven't watched many movies.");
}else if(personalMovieDB.count >= 10 && personalMovieDB.count <=30){
    alert("You have watched quite a lot of movies.");
}else if(personalMovieDB.count > 30){
    alert("You are a movie addict.");
}else{
    alert("An error has occured.");
}

let lastWatched1 = prompt("What's the last movie you watched?", ""),
lastWatchedRating1 = prompt("What would you rate it?", "");

let lastWatched2 = prompt("What's the second to last movie you watched?", ""),
lastWatchedRating2 = prompt("What would you rate it?", "");


while((lastWatched1.length < 1 || lastWatched1 > 50) || (lastWatched2.length < 1 || lastWatched2 > 50) ){
     lastWatched1 = prompt("What's the last movie you watched?", "");
     lastWatchedRating1 = prompt("What would you rate it?", "");

     lastWatched2 = prompt("What's the second to last movie you watched?", "");
     lastWatchedRating2 = prompt("What would you rate it?", "");
}

console.log('All done!');