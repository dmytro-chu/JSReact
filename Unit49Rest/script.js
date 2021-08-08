const log = function(a, b, ...rest ) {
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage');

function calc0rDouble(number, basis) {
    basis = basis || 2; //Если второй оператор не будет задан, то подставиться 2ка, потому что "или" || возвращает первую правду.
    console.log(number * basis);
}

calc0rDouble(3, 5);

function calc0rDouble(number, basis = 2) {
    console.log(number * basis);
}

calc0rDouble(3, 5);