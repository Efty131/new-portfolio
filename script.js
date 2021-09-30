const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navberLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navberLinks.classList.toggle('active')
})