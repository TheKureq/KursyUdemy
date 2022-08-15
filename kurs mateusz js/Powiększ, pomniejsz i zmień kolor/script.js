const plusBtn = document.querySelector(".sizeUp")
const minusBtn = document.querySelector(".sizeDown")
const colorBtn = document.querySelector(".color")
const text = document.querySelector(".text>p")

let fontSize = 36;

const sizeUpFn = () => {
    fontSize++;
    text.style.fontSize = fontSize + "px";
}

const sizeDownFn = () => {
    fontSize--;
    text.style.fontSize = fontSize + "px";
}

const colorFn = () => {
    const x = Math.random()*255;
    const y = Math.random()*255;
    const z = Math.random()*255;

    text.style.color = `rgb(${x},${y},${z})`;
}

plusBtn.addEventListener("click", sizeUpFn);
minusBtn.addEventListener("click", sizeDownFn);
colorBtn.addEventListener("click", colorFn)

