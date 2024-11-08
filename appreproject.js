const arrow = document.getElementById('textOnClick');
const table = document.getElementById('openspisok');
const displayForm = document.getElementById('omagad');
const congratulations = document.getElementById('congratulationsModelWindowForJs');
const buttonsForForms = document.querySelectorAll("#formFirst,#formSecond");
const sectionMenu = document.getElementById('sectionMenuForJs');
const menu = document.getElementById('menuForJs');
const burgerButton = document.getElementById('burgerButton');
const burgerButtonDiv = document.getElementById('burgerButtonDiv');
const menuLinks = document.querySelectorAll('.menu_links')

document.getElementById('openspisok').addEventListener('click', function(event){

    
    let second = event.target.nextElementSibling;
    let third = event.target.nextElementSibling?.nextElementSibling;
    if (event.target.tagName == 'H3') {
        if (second.style.display == 'none') {
            second.style.display = 'block';
            event.target.previousElementSibling.style.transform = 'rotate(90deg)';
        }
        else{
            second.style.display = 'none';
            event.target.previousElementSibling.style.transform = 'none';
        }

    }
    else if(event.target.tagName == 'IMG'){
        
        
        if (third.style.display == 'none') {
            third.style.display = 'block';
            event.target.style.transform = 'rotate(90deg)';
        }
        else{
            third.style.display = 'none';
            event.target.style.transform = 'none'
        }
    }
});

buttonsForForms.forEach(button =>{
    button.addEventListener('click', function(){
        if (getComputedStyle(displayForm).display == 'none') {
            displayForm.style.display = 'block';
        }
        else{
            displayForm.style.display = 'none';
        }
    })
})

window.onclick = function(event) {
    modal = document.getElementById('omagad');
    if (event.target == modal) {
        modal.style.display = "none";
        congratulations.style.display = 'none';
        document.getElementById('dataFromForJS').reset();
    }
}
document.getElementById('closeModalWindow').onclick = function () {
    displayForm.style.display = 'none';
    congratulations.style.display = 'none';
    document.getElementById('dataFromForJS').reset();
}

document.getElementById('dataFromForJS').onsubmit = function(event){
    event.preventDefault();
    congratulations.style.display = 'block';
    document.getElementById('dataFromForJS').reset();
}

burgerButton.onclick = function(){
    if (getComputedStyle(sectionMenu).display == 'none') {
        sectionMenu.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.getElementById('blackoutJs').style.display = 'block'
    }
    else{
        sectionMenu.style.display = 'none';
        document.body.style.overflow = '';
        document.getElementById('blackoutJs').style.display = 'none'
    }
    
    
}

window.onclick = function(event){
    if (event.target != burgerButton & !burgerButton.contains(event.target) & !sectionMenu.contains(event.target)) {
        sectionMenu.style.display = 'none';
        document.body.style.overflow = '';
        document.getElementById('blackoutJs').style.display = 'none'
    }
}



function updateSize(){
    const block1Rect = burgerButtonDiv.getBoundingClientRect();
    sectionMenu.style.top = `${block1Rect.bottom + 20}px`; // $ позволяет производить мат действия в ковычках
    sectionMenu.style.left = `${block1Rect.left - 200}px`;
}

updateSize();

window.addEventListener('resize', updateSize);

menuLinks.forEach(function(item){//item - каждый элемент из массива
    item.addEventListener('click', function(){
        sectionMenu.style.display = 'none';
        document.getElementById('blackoutJs').style.display = 'none'
        document.body.style.overflow = '';

    })
})
