'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
        
    }

    #surname = 'Zhopan';

    say = () => {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
    }

    get age() {
        return this._age;
    }

    get surname() {
        return this.#surname;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение!');
        }
    }

    set surname(surname) {
        this.#surname = surname;
    }

}

const ivan = new User('Ivan', 27);
ivan.surname = 'Zhupan'
ivan.say();