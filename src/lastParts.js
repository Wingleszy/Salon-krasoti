const decrBtn = document.getElementById('decr-btn')
const incrBtn = document.getElementById('incr-btn')
const slider = document.getElementById('slider')
// const firstImg = document.getElementById('firstImg')
// const secondImg = document.getElementById('secondImg')
// const thirdImg = document.getElementById('thirdImg')
// const forthImg = document.getElementById('forthImg')
let counter = 0

incrBtn.addEventListener('click', () => {
    counter += 675
    if (counter >= 1260) {
        counter = 1260
    }
    slider.scrollLeft = counter
})


decrBtn.addEventListener('click', () => {
    counter -= 675
    if (counter <= 0) {
        counter = 0
    }
    slider.scrollLeft = counter + 0.5
})
