let slide = document.querySelectorAll('.cr');
let idx = 0;

function next(){
    slide[idx].classList.remove('carr');
    idx = (idx + 1) % slide.length;
    slide[idx].classList.add('carr');
}

function ant(){
    slide[idx].classList.remove('carr');
    idx = (idx - 1 + slide.length) % slide.length;
    slide[idx].classList.add('carr');
}

setInterval(next, 10000);
