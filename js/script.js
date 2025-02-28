document.addEventListener('DOMContentLoaded', function() {
    // CODIGO PARA AJUSTAR EL MENU EN PANTALLAS PEQUEÑAS
    const menuIcon = document.getElementById('menu-icono');
    const menu = document.getElementById('menu');
    const menuLinks = document.querySelectorAll('#menu ul li a');

    if (menuIcon && menu) {
        menuIcon.addEventListener('click', function() {
            menu.classList.toggle('active');
        });

        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                menu.classList.remove('active');
            });
        });
    } else {
        console.error('No se encontraron los elementos menu-icono o menu.');
    }
        // CODIGO PARA CARRUSEL DE FOTOS EN LA SECCION "GALERIA"
        const carruselTrackLugares = document.querySelector('.galeria-categoria:nth-child(1) .carrusel-track');
        const imagenesLugares = document.querySelectorAll('.galeria-categoria:nth-child(1) .carrusel-track img');
        const botonAnteriorLugares = document.querySelector('.galeria-categoria:nth-child(1) .anterior-lugares');
        const botonSiguienteLugares = document.querySelector('.galeria-categoria:nth-child(1) .siguiente-lugares');
    
        const carruselTrackPlatillos = document.querySelector('.galeria-categoria:nth-child(2) .carrusel-track');
        const imagenesPlatillos = document.querySelectorAll('.galeria-categoria:nth-child(2) .carrusel-track img');
        const botonAnteriorPlatillos = document.querySelector('.galeria-categoria:nth-child(2) .anterior-platillos');
        const botonSiguientePlatillos = document.querySelector('.galeria-categoria:nth-child(2) .siguiente-platillos');
    
        const carruselTrackMontajes = document.querySelector('.galeria-categoria:nth-child(3) .carrusel-track');
        const imagenesMontajes = document.querySelectorAll('.galeria-categoria:nth-child(3) .carrusel-track img');
        const botonAnteriorMontajes = document.querySelector('.galeria-categoria:nth-child(3) .anterior-montajes');
        const botonSiguienteMontajes = document.querySelector('.galeria-categoria:nth-child(3) .siguiente-montajes');
    
        let indiceLugares = 0;
        let indicePlatillos = 0;
        let indiceMontajes = 0;
    
        function mostrarImagenLugares() {
            imagenesLugares.forEach((imagen, indice) => {
                imagen.style.display = 'none';
            });
            imagenesLugares[indiceLugares].style.display = 'block';
        }
    
        function mostrarImagenPlatillos() {
            imagenesPlatillos.forEach((imagen, indice) => {
                imagen.style.display = 'none';
            });
            imagenesPlatillos[indicePlatillos].style.display = 'block';
        }
    
        function mostrarImagenMontajes() {
            imagenesMontajes.forEach((imagen, indice) => {
                imagen.style.display = 'none';
            });
            imagenesMontajes[indiceMontajes].style.display = 'block';
        }
    
        botonAnteriorLugares.addEventListener('click', function() {
            indiceLugares--;
            if (indiceLugares < 0) {
                indiceLugares = imagenesLugares.length - 1;
            }
            mostrarImagenLugares();
        });
    
        botonSiguienteLugares.addEventListener('click', function() {
            indiceLugares++;
            if (indiceLugares >= imagenesLugares.length) {
                indiceLugares = 0;
            }
            mostrarImagenLugares();
        });
    
        botonAnteriorPlatillos.addEventListener('click', function() {
            indicePlatillos--;
            if (indicePlatillos < 0) {
                indicePlatillos = imagenesPlatillos.length - 1;
            }
            mostrarImagenPlatillos();
        });
    
        botonSiguientePlatillos.addEventListener('click', function() {
            indicePlatillos++;
            if (indicePlatillos >= imagenesPlatillos.length) {
                indicePlatillos = 0;
            }
            mostrarImagenPlatillos();
        });
    
        botonAnteriorMontajes.addEventListener('click', function() {
            indiceMontajes--;
            if (indiceMontajes < 0) {
                indiceMontajes = imagenesMontajes.length - 1;
            }
            mostrarImagenMontajes();
        });
    
        botonSiguienteMontajes.addEventListener('click', function() {
            indiceMontajes++;
            if (indiceMontajes >= imagenesMontajes.length) {
                indiceMontajes = 0;
            }
            mostrarImagenMontajes();
        });
    });
    