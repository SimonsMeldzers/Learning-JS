"use strict";

const numberOfFilms = prompt("How many movies have you watched?", "") ;

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private: false
};

const lastWatched1 = prompt("What's the last movie you watched?", ""),
      lastWatchedRating1 = prompt("What would you rate it?", "");

const lastWatched2 = prompt("What's the second to last movie you watched?", ""),
      lastWatchedRating2 = prompt("What would you rate it?", "");

const movies = {
    lastWatched1: lastWatchedRating1,
    lastWatched2: lastWatchedRating2
};