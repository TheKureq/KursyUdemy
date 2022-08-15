const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;



const showMsg = () => {
    
    if((pass.value.length > minValue) && (pass.value.match(letters)) && (pass.value.match(numbers)) && (pass.value.match(special))) {
        
        console.log('dobre haslo')
        p.textContent = 'dobre haslo'
        p.style.color = 'lime'  
    } 
    else {
        console.log('zle haslo')
        p.textContent = 'zle haslo'
        p.style.color = 'tomato'  
    }
}

pass.addEventListener('keyup', showMsg)