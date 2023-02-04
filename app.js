const upBtn = document.querySelector('.up-button')

const downBtn = document.querySelector('.down-button')

const sidebar = document.querySelector('.sidebar')

const mainSlide = document.querySelector('.main-slide')

const slidesCount = mainSlide.querySelectorAll('div').length

const container = document.querySelector('.container')

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`


// Улучшаем размер фото
const width = container.clientWidth
mainSlide.style.width = `${width - 450}px`
// Улучшаем размер фото



upBtn.addEventListener('click', () => {
    changeSlide("up")
})

downBtn.addEventListener('click', () => {
    changeSlide("down")
})

document.addEventListener("keydown", event => {
    if (event.key === "ArrowUp") {
        changeSlide("up")
    } else if (event.key === "ArrowDown") {
        changeSlide("down")
    }
})

function changeSlide(direct) {
    if (direct === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    } else if (direct === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }


    const height = container.clientHeight


    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}
