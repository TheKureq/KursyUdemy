const wpis = document.querySelector('#converter');
const wynik = document.querySelector('.result');
const p_konw = document.querySelector('.conv');
const p_res = document.querySelector('.reset');
const p_chan = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');


const convertFun = () => {
    one.textContent === '°C' ? wynik.textContent = `${wpis.value*1.8+32}°F` : wynik.textContent = `${(wpis.value - 32) / 1.8}°C`;   
} 

const changeFun = () => {
    if (one.textContent === '°F') {
        one.textContent = '°C';
        two.textContent = '°F';
    } else {
        one.textContent = '°F';
        two.textContent = '°C';
    }  
}

const resetFun = () => {
    wpis.value = '';
    wynik.textContent = '';
}


p_konw.addEventListener('click', convertFun);
p_chan.addEventListener('click', changeFun);
p_res.addEventListener('click', resetFun);