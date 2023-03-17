var topButton = document.getElementById('topButton')
var topMenu = document.getElementById('topMenu')

topButton.addEventListener('click', function() {
    if (topMenu.style.display === ('none')) {
        topMenu.style.display='block'
    } else {
        topMenu.style.display='none'
    }
})