const arrow = document.querySelector(".arrow")
const icon = document.querySelector(".fas")
const img = document.querySelector(".item1")


const showImg = () => {
    img.classList.toggle('hide')
    
    if (img.classList.contains('hide')) {
        icon.style.transform = 'rotate(180deg)'
    }
    // else {
    //     fas.style.transform = 'rotate(-180deg)'
    // }
}

arrow.addEventListener("click", showImg)