const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navberLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navberLinks.classList.toggle('active')
})

//DARK MODE

function myFunction(){
    const element = document.body;
    element.classList.toggle('dark-mode');
}