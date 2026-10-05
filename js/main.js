
let menuIcon = document.getElementById("menu-icon");
let closeIcon = document.getElementById('close-icon');
let menuPanel = document.getElementById('menu-panel');


menuIcon.addEventListener('click', () => {
    if(!(menuIcon.classList.contains("noDisplay"))){
        menuIcon.classList.toggle("noDisplay");
        closeIcon.classList.toggle("noDisplay");
        menuPanel.classList.toggle("noDisplay");
    }
})
closeIcon.addEventListener('click', () => {
    if(!(closeIcon.classList.contains("noDisplay"))){
        closeIcon.classList.toggle("noDisplay");
        menuIcon.classList.toggle("noDisplay");
        menuPanel.classList.toggle("noDisplay");    
    }
}) 