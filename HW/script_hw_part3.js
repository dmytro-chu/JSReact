/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';



let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while(numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
        alert('Необходимо ввести число');
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}
    
start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');    
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
    } else {
        alert('Вы ввели недопустимое значение');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером - ${i}`);
    }
}

// let nameOfMovie = prompt('Один из последних просмотренных фильмов?', '');
// while (!nameOfMovie || nameOfMovie.length == 0 || nameOfMovie.length > 50 ) {
//     alert('Необходимо ввести название до 50 символов.');
//     nameOfMovie = prompt('Введите один из последних просмотренных фильмов?', '');    
// }
// let rait = prompt('На сколько оцените его?', '');
// while (!rait || rait.length == 0 || rait.length > 3 ) {
//     alert('Необходимо ввести значение до 10 (например: 5,2 или 7,3).');
//     rait = prompt('На сколько оцените его?', '');
// }
// let nameOfMovie1 = prompt('Один из последних просмотренных фильмов?', '');
// while (!nameOfMovie1 || nameOfMovie1.length == 0 || nameOfMovie1.length > 50 ) {
//     alert('Необходимо ввести название до 50 символов.');
//     nameOfMovie1 = prompt('Введите один из последних просмотренных фильмов?', '');
// }
// let rait1 = prompt('На сколько оцените его?', '');
// while (!rait1 || rait1.length == 0 || rait1.length > 3 ) {
//     alert('Необходимо ввести значение до 10 (например: 5,2 или 7,3).');
//     rait1 = prompt('На сколько оцените его?', '');
// }

// personalMovieDB.movies = {
//     [nameOfMovie]: rait,
//     [nameOfMovie1]: rait1
// };

console.log(personalMovieDB);