window.onload = main;

function main() {
    addEventListeners();
}

function addEventListeners() {
    const menuButton = document.getElementById('burgermenu')
    menuButton.onclick = toggleMenu;
}

function toggleMenu() {
    const header = document.querySelector('header')
    header.classList.toggle('header-open')
}