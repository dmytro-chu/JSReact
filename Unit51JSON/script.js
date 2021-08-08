'use strict';

const persone = {
    name: 'Alex',
    tel: '+3844444444',
};

console.log(JSON.stringify(persone)); // Результат: {"name":"Alex","tel":"+3844444444"}
console.log(JSON.parse(JSON.stringify(persone))); // Результат: { name: 'Alex', tel: '+3844444444' }

const persone1 = {
    name: 'Alex',
    tel: '+3844444444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(persone1));
clone.parents.mom = 'Ann';
console.log(persone1);
// Результат: {
//     name: 'Alex',
//     tel: '+3844444444',
//     parents: { mom: 'Olga', dad: 'Mike' }
//   }
console.log(clone);
// Результат: {
//     name: 'Alex',
//     tel: '+3844444444',
//     parents: { mom: 'Ann', dad: 'Mike' }
//   }