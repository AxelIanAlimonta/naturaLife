let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

let tamHeader= 80;


window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Si se está desplazando hacia abajo
        navbar.style.top = `-${tamHeader}px`;  // Desplaza el navbar hacia arriba para ocultarlo
    } else {
        // Si se está desplazando hacia arriba
        navbar.style.top = "0";  // Devuelve el navbar a su posición original
    }

    lastScrollTop = scrollTop;
});
