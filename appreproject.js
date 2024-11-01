const arrow = document.getElementById('textOnClick');
const table = document.getElementById('openspisok');
const displayForm = document.getElementById('omagad');
const congratulations = document.getElementById('congratulationsModelWindowForJs');
const buttonsForForms = document.querySelectorAll("#formFirst,#formSecond")


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
    }
}
document.getElementById('closeModalWindow').onclick = function () {
    displayForm.style.display = 'none';
    congratulations.style.display = 'none';
}

document.getElementById('dataFromForJS').onsubmit = function(event){
    event.preventDefault();
    congratulations.style.display = 'block';
    document.getElementById('dataFromForJS').reset();
}







