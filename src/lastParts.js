const decrBtn = document.getElementById('decr-btn')
const incrBtn = document.getElementById('incr-btn')
const slider = document.getElementById('slider-content')
const map = document.getElementById('map')
let counter = 0
let windowWidth = window.innerWidth * 46 / 100


if (window.innerWidth > 1800) {
    map.width = window.innerWidth / 4
    map.height = window.innerWidth / 4
    windowWidth = window.innerWidth * 34 / 100
} else if (window.innerWidth > 1000) {
    map.width = window.innerWidth / 3
    map.height = window.innerWidth / 3
    windowWidth = window.innerWidth * 46 / 100
} else if (window.innerWidth > 1000) {
    map.width = window.innerWidth / 1.7
    map.height = window.innerWidth / 1.7
} else {
    map.width = window.innerWidth/1.5
    map.height = window.innerWidth/1.5
    windowWidth = window.innerWidth * 50 / 100
}

let offset = 0

decrBtn.addEventListener('click', () => {
    if (offset !== 0) {
        offset -= windowWidth
    }
    if (offset < 0) {
        offset = 0
    } else if (offset == 0) {
        offset = slider.offsetWidth
    }
    slider.style.left = -offset + 'px'
})

incrBtn.addEventListener('click', () => {
    offset += windowWidth
    if (offset > slider.offsetWidth) {
        offset = 0
    }
    slider.style.left = -offset + 'px'
})