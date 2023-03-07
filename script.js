let menuBtn = document.querySelector('.ri-menu-fill');
let menu = document.querySelector('.menu');
let overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', displayMenu);
overlay.addEventListener('click', hideMenu);

function displayMenu() {
    menu.classList.remove('hide-menu');
    menu.classList.add('display-menu');

    overlay.classList.remove('hidden');
}

function hideMenu() {
    menu.classList.add('hide-menu');
    menu.classList.remove('display-menu');

    overlay.classList.add('hidden');
}