'use strict';

function showThis() {
    console.log(this);
    function sum() {
        console.log(this);
        return this.a + this.b;
    }
}

// showThis();

showThis(4, 5);

const obj = {
    a: 20,
    b: 15,
    sum: function() {
        function shout() {
            console.log(this);
        }
        shout();
    }
};

obj.sum();

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}
let ivan = new User('Ivan', 23);

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'Jhon'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count(num) {
    return this*num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(13));

// 1) Обычная функция: this = window, но если use strict - undefinde
// 2) Контекст у методов объекта - возвращает сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call,apply, bind

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';
});

//Не сработает
btn.addEventListener('click', () => {
    console.log(this);
    this.style.backgroundColor = 'red';
});

// Сработает
btn.addEventListener('click', (e) => {
    console.log(e.target);
    e.target.style.backgroundColor = 'red';
});

const obj1 = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
        };

        say();
    }
};

obj1.sayNumber();

const double1 = a => a * 2;

console.log(double1(4));

