function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide')
    const container = document.querySelector('.background')

    slides[activeSlide].classList.add('active')
    container.style.backgroundImage = slides[activeSlide].style.backgroundImage

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses()

            slide.classList.add('active')

            container.style.backgroundImage = slide.style.backgroundImage
        })
    }

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

slidesPlugin(3)
