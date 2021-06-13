/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () =>{

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const   removeAdv = document.querySelector('.promo__adv'),
            replaceCOonDR = document.querySelector('.promo__genre'),
            changeBg = document.querySelector('.promo__bg'),
            movieList = document.querySelector('.promo__interactive-list'),
            addForm = document.querySelector('form.add'),
            addInput = addForm.querySelector('.adding__input'),
            checkbox = addForm.querySelector('[type="checkbox"]');

    const deleteBlock = (currentBlock) => {
        currentBlock.remove();
    };
    
    const makeChanges = () => {
        replaceCOonDR.innerHTML = 'ДРАМА';
        changeBg.style.backgroundImage = "url('img/bg.jpg')";
    };
    
    const makeSort = (currentArr) => {
        currentArr.sort();
    };

    const createMovieList = (parent, films) => {
        parent.innerHTML = "";
        makeSort(films);
        films.forEach((film, i) =>{
            parent.innerHTML += `<li class="promo__interactive-item">${i+1}. ${film}
            <div class="delete"></div>
        </li>`;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () =>{
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(movieList, movieDB.movies);
            });
        });
    };
    
    deleteBlock(removeAdv);
       
    makeChanges();

    createMovieList(movieList, movieDB.movies);

    //добавление элемента при нажатии на добавить
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        //выводим в консоль сообщение при отмеченном чекбоксе
        let newMovieName = addInput.value;
        const favorite = checkbox.checked;
        
        if(newMovieName) {
            console.log(checkbox.checkbox);
            if(favorite){
                console.log('введён любимый фильм');
            }
            //проверяем длинну названия
            if (newMovieName.length > 21) {
                newMovieName = `${newMovieName.substring(0, 21)}...`;
            }
            movieDB.movies.push(newMovieName);
            makeSort(movieDB.movies);
            createMovieList(movieList, movieDB.movies);
        }

        event.target.reset();   
        
    });
    //удаление  элемента при нажатии на корзину
    // movieList.addEventListener('click', (e) =>{
    //     if(e.target.className == 'delete') {
    //     e.target.parentElement.remove();
    //     }
    // });
});








