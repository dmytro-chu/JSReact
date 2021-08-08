'use strict';

//filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter(function(name) {
    return name.length < 5; // записать в новый массив элементы, в которых меньше 5 символов
});

console.log(shortNames);

// map

const /* или let*/  answers = ['Ivan', 'AnnA', 'Hello'];

const result /* или answers */ = answers.map(item => item.toLowerCase()); // перевести все элементы в нижний регистр

console.log(answers);

// every/some

const some = [4, 'qwq', 'sfserfd'];

console.log(some.some(item => typeof(item) === 'number')); //true
console.log(some.every(item => typeof(item) === 'number')); //false

// reduce

const arr = [4, 5, 1, 3, 2, 6];

const res = arr.reduce((sum, current) => sum + current, 3/*добавит начальное значение, с которого будет начинаться суммирование*/);
console.log(res);

const arr1 = ['apple', 'pear', 'plum'];

const res1 = arr1.reduce((sum, current) => `${sum}, ${current}`);
console.log(res1);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj) //Делает из объекта масивв масиввов
/*[
    [ 'ivan', 'persone' ],
    [ 'ann', 'persone' ],
    [ 'dog', 'animal' ],
    [ 'cat', 'animal' ]
  ]*/

.filter(item => item[1] === 'persone') //Оставляем только массивы со вторым значением 'person'
.map(item => item[0]); //Формируем массив с именами. ['ivan', 'ann']
console.log(newArr);



