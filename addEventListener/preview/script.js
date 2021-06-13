const btns = document.querySelectorAll('button');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

btn.onclick = function() {
    alert('Click');
};

btn.addEventListener('click', () => {
    alert('Click');
});

btn.addEventListener('click', () => {
    alert('Second click');
});

btn.addEventListener('click', (e) => {
    e.target.remove();
});

btn.addEventListener('click', () => {
    console.log('Hover');
});

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement);
});

let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget); //всплытие событий
    console.log(e.target);
    i++;
    if (i == 1) {
        btn.removeEventListener('Click', deleteElement);
    }
};

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);


// отменяем действие браузера, например, преход по ссылке
const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(event.target);
});
