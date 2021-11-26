window.onload = main;

function main() {
    addEventListeners();
}

function addEventListeners() {
    const menuButton = document.getElementById('burgermenu')
    menuButton.onclick = toggleMenu;

    const home = document.getElementById('home')
    home.onclick = scrollIntoHome;

    const aboutMe = document.getElementById('about-me')
    aboutMe.onclick = scrollIntoAboutMe;

    const skills = document.getElementById('skills')
    skills.onclick = scrollIntoSkills;

    const projects = document.getElementById('projects')
    projects.onclick = scrollIntoProjects;

    const contacts = document.getElementById('contact')
    contacts.onclick = scrollIntoContact;
}

function toggleMenu() {
    const header = document.querySelector('header')
    header.classList.toggle('header-open')
}

function scrollIntoHome(event) {
    const homeScroll = document.getElementById('home-scroll')
    homeScroll.scrollIntoView({ behavior: "smooth"});
}

function scrollIntoAboutMe(event) {
    const aboutMeScroll =  document.getElementById('about-me-scroll')
    aboutMeScroll.scrollIntoView({ behavior: "smooth"});
}

function scrollIntoSkills(event) {
    const skillsScroll = document.getElementById('skills-scroll')
    skillsScroll.scrollIntoView({ behavior: "smooth"});
}

function scrollIntoProjects(event) {
    const projectsScroll = document.getElementById('projects-scroll')
    projectsScroll.scrollIntoView({ behavior: "smooth"});
}

function scrollIntoContact(event) {
    const contactScroll = document.getElementById('contact-scroll')
    contactScroll.scrollIntoView({ behavior: "smooth"});
}