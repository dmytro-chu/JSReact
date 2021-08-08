window.addEventListener('DOMContentLoaded', function() {
    console.log('ok');

    //Табы
    
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if  (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target ==item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    //Timer

    const deadLine = '2021-07-17';
    

    function getTimeRemaining (endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / 1000 / 60 / 60) % 24),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;   
        } else {
            return num;
        }
        
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
                days.innerHTML = '0';
                hours.innerHTML = '0';
                minutes.innerHTML = '0';
                seconds.innerHTML = '0';
            }
        }
    }

    setClock('.timer', deadLine);

    //Modal
    
    const btnModalOpen = document.querySelectorAll('[data-modal]'),
          btnModalClose = document.querySelector('[data-close]'),
          modalWindow = document.querySelector('.modal');
    
    
    function modalOpen () {
        modalWindow.classList.toggle('show');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }
    
    btnModalOpen.forEach(item =>{
        item.addEventListener('click', modalOpen);
    });

    function modalClose () {
        modalWindow.classList.toggle('show');
        document.body.style.overflow = ''; 
    }
    
    btnModalClose.addEventListener('click', modalClose);

    modalWindow.addEventListener('click', (e) => {
        if (e.target === modalWindow) {
            modalClose();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
            modalClose();
        }
    });

    const modalTimerId = setTimeout(modalOpen, 3000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            modalOpen();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    
    window.addEventListener('scroll', showModalByScroll);


    // Делаем классами меню на день

    let container = document.querySelector('.menu__field .container');
    console.log(container);

    container.innerHTML='';

    class MenuCard {
        constructor(menuItemTitle, menuItemImage, menuItemContent, menuItemPrice, menuItemImageAlt, parentSelector, ...classes) {
            this.menuItemTitle = menuItemTitle;
            this.menuItemImage = menuItemImage;
            this.menuItemContent = menuItemContent;
            this.menuItemPrice = menuItemPrice;
            this.classes = classes;
            this.menuItemImageAlt = menuItemImageAlt;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }
        changeToUAH() {
            this.menuItemPrice = this.menuItemPrice * this.transfer;
        }
        render() {
            const element = document.createElement('div');
            
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `   
                <img src="${this.menuItemImage}" alt="${this.menuItemImageAlt}">
                <h3 class="menu__item-subtitle">${this.menuItemTitle}</h3>
                <div class="menu__item-descr">${this.menuItemContent}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.menuItemPrice}</span> грн/день</div>
                </div>
                `;
                
            this.parent.append(element);
        }
    }



    // const allMenu = {
    //     item1: new menuData('Меню "Фитнес"', 'img/tabs/vegy.jpg', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', '229'),

    //     item2: new menuData('Меню “Премиум”', 'img/tabs/elite.jpg', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', '550'),

    //     item3: new menuData('Меню "Постное"', 'img/tabs/post.jpg', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков. ', '430'),
    // };


    // for (const key in allMenu) {
    //     allMenu[key].addMenuItem();
    // }

    new MenuCard(
        'Меню "Фитнес"',
        'img/tabs/vegy.jpg',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        'vegy',
        '.menu .container',
        'menu__item',
        'big'
    ).render();

    new MenuCard(
        'Меню “Премиум”',
        'img/tabs/elite.jpg',
        'В меню “Премиум”  мы  используем  не  только  красивый  дизайн упаковки,  но  и  качественное  исполнение  блюд.  Красная  рыба,  морепродукты,  фрукты  -  ресторанное меню  без  похода  в  ресторан! ffggfgfggdgdfgdfdfdfdfdfdfd',
        21,
        'elite',
        '.menu .container',
        'menu__item'        
    ).render();

    new MenuCard(
        'Меню "Постное"',
        'img/tabs/post.jpg',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков. ',
        16,
        'post',
        '.menu .container',
        'menu__item'
    ).render();

});