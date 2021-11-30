window.onload = main;

function main() {
    addEventListeners();
}

function addEventListeners() {
    const menuButton = document.getElementById('burgermenu')
    menuButton.onclick = toggleMenu;

    const btnScrollToTop = document.getElementById('btn-scroll-to-top')
    btnScrollToTop.onclick = scrollToTop;

    const home = document.getElementById('home')
    home.onclick = () => scrollIntoView('home-scroll')

    const aboutMe = document.getElementById('about-me')
    aboutMe.onclick = () => scrollIntoView('about-me-scroll')

    const skills = document.getElementById('skills')
    skills.onclick = () => scrollIntoView('skills-scroll')

    const projects = document.getElementById('projects')
    projects.onclick = () => scrollIntoView('projects-scroll')

    const contacts = document.getElementById('contact')
    contacts.onclick = () => scrollIntoView('contact-scroll')
}

function toggleMenu() {
    const header = document.querySelector('header')
    header.classList.toggle('header-open')
}

function closeMenu() {
    const header = document.querySelector('header')
    header.classList.remove('header-open')
}

function scrollToTop() {
    // window.scrollTo(0, 0);

    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
}

function scrollIntoView(elementId) {
    const element = document.getElementById(elementId)
    element.scrollIntoView({ behavior: "smooth"});
    closeMenu();
}