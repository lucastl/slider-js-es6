/// START

let isLoaded = () => {

    let loading = document.querySelector('#loading');

    loading.style.opacity = 0;
    loading.remove();

}

let moveToLeft = () => {

    // Contenedor de slides
    const slidesWrap = document.querySelector('div.slides-wrap');

    // Obtengo todos los slides en un array
    const slides = document.querySelectorAll('.slide');

    // 
    let firstSlide = slides[0];
    let lastSlide = slides[slides.length - 1];

    slidesWrap.insertBefore(lastSlide, firstSlide);


}

let moveToRight = () => {

    // Contenedor de slides
    var slidesWrap = document.querySelector('div.slides-wrap');

    // Obtengo todos los slides en un array
    var slides = document.querySelectorAll('.slide');

    // 
    let firstSlide = slides[0];

    slidesWrap.insertBefore(firstSlide, null);

}

let onClickPrev = () => {

    // Contenedor de slides
    var slidesWrap = document.querySelector('div.slides-wrap');

    slidesWrap.classList.add('moveToLeft');

    moveToLeft();

    slidesWrap.addEventListener("animationend", alAcabarLaAnimacion);

    function alAcabarLaAnimacion(e) {

        e.srcElement.classList.remove('moveToLeft');
        slidesWrap.removeEventListener("animationend", alAcabarLaAnimacion);

    }

}

let onClickNext = () => {

    // Contenedor de slides
    var slidesWrap = document.querySelector('div.slides-wrap');

    slidesWrap.classList.add('moveToRight');

    slidesWrap.addEventListener("animationend", alAcabarLaAnimacion);

    function alAcabarLaAnimacion(e) {
        e.srcElement.classList.remove('moveToRight');
        moveToRight();
        slidesWrap.removeEventListener("animationend", alAcabarLaAnimacion);
    }

}


// Cuando carga el DOM
document.addEventListener('DOMContentLoaded', () => {

    // Verifica si es Home
    if ( window.location.pathname === '/' ) {
        
        // SLIDER
        const btnNext = document.querySelector('div#btn-next');
        const btnPrev = document.querySelector('div#btn-prev');

        btnPrev.addEventListener('click', () => {
            onClickPrev();
        });

        btnNext.addEventListener('click', () => {
            onClickNext();
        });

    }

    // Cuando carga imgs
    window.addEventListener('load', () => {

        isLoaded();

    });// FIN WINDOW LOAD

}); // FIN READY