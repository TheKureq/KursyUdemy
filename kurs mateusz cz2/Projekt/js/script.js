document.addEventListener('DOMContentLoaded', function(){

    // pobieranie zmiennych
    const nav = document.querySelector('.navbar')
    const navColapse = document.querySelector('.navbar-collapse')
    const allNavItems = document.querySelectorAll('.nav-link')

    function addShadow(){
        if (window.scrollY >= 100){
            nav.classList.add("shadow-bg") 
        }
        else {
            nav.classList.remove("shadow-bg")
        }
    }



    // chowanie rozwijanej listy hamburgerowej
    allNavItems.forEach(item => item.addEventListener('click', () => navColapse.classList.remove('show')))

    // nasłuchiwanie scrolla i dodawanie funkcji cienia nawigacji
    window.addEventListener('scroll',addShadow)
})