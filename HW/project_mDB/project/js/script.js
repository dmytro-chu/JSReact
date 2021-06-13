/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const removeAdv = document.querySelector('.promo__adv');
const replaceCOonDR = document.querySelector('.promo__genre');
const changeBg = document.querySelector('.promo__bg');
const changeNameMovie = document.querySelectorAll('.promo__interactive-item');
const sortedMovieDB = movieDB.movies.sort();
const makeNumberUl = document.querySelector('.promo__interactive-list');

removeAdv.remove();
replaceCOonDR.innerHTML = 'ДРАМА';
changeBg.style.background = "url('img/bg.jpg') center center / cover no-repeat";

for(let i = 0; i < changeNameMovie.length; i++) {
    changeNameMovie[i].innerHTML = (i+1) + '. ' + sortedMovieDB[i];
}

// changeNameMovie.forEach(item => {
//     item.innerHTML = sortedMovieDB[item];
// });
makeNumberUl.style.listStyleType = 'circle';