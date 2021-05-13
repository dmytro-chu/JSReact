/* Задание на урок :

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while(numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
        alert('Необходимо ввести число');
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }

    
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');    
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
} else {
    alert('Вы ввели недопустимое значение');
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