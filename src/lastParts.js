const decrBtn = document.getElementById('decr-btn')
const incrBtn = document.getElementById('incr-btn')
const slider = document.getElementById('slider')
const map = document.getElementById('map')
let counter = 0
let windowWidth = window.innerWidth * 46 / 100

console.log(window.innerWidth);

if (window.innerWidth > 1800) {
    map.width = window.innerWidth / 4
    map.height = window.innerWidth / 4
} else if (window.innerWidth > 1500) {
    map.width = window.innerWidth / 2.5
    map.height = window.innerWidth / 2.5
} else {
    map.width = window.innerWidth/1.5
    map.height = window.innerWidth/1.5
}

incrBtn.addEventListener('click', () => {
    counter += windowWidth
    if (counter >= window.innerWidth) {
        counter = window.innerWidth
    }
    slider.scrollLeft = counter
})


decrBtn.addEventListener('click', () => {
    counter -= windowWidth
    if (counter <= 0) {
        counter = 0
    }
    slider.scrollLeft = counter
})
