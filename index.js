let count = 0;

const counter = document.getElementById('counter');
counter.innerText = count;

function styleCounter(){
    if(count < 0){
        counter.style = 'color: #ff3333;'
    } else if (count > 0){
        counter.style = 'color: #46ff33;'
    } else {
        counter.style = 'color: white;'
    }
}

function decrementCount(){
    count --;
    counter.innerText = count;
    styleCounter();
};

function incrementCount(){
    count++;
    counter.innerText = count;
    styleCounter();
};

function clearCount(){
    count = 0;
    counter.innerText = count;
    styleCounter();
};

const clearButton = document.getElementById('clear');
clearButton.addEventListener("click", function (){
    console.log('count Cleared')
});

const userName = document.getElementById('username');
const userInput = document.getElementById('nameInput');

function changUserName(){
    
    if(nameInput.value){
        userName.innerText = `${nameInput.value}'s Counter`;
        nameInput.value = '';
    } else {
        alert('Please Enter Your Name');
    }
}

const background = document.querySelector('body')
const sectionText = document.getElementById('input-container')
const themeButton = document.getElementById('theme-button')
function themeChange(){
    background.classList.toggle('dark-theme-body');
    sectionText.classList.toggle('dark-theme-input-container');
    userName.classList.toggle('dark-theme-username');
    nameInput.classList.toggle('dark-theme-input');
    if(themeButton.innertext === 'Dark Mode'){
        themeButton.innerText = 'Light Mode'
    } else {
        themeButton.innerText = 'Dark-Mode';
    }
}


const darkMode = document.getElementsByClassName('dark-theme-')
console.log(darkMode)