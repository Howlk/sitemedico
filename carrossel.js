const carrs = document.getElementById("cart")
const carr = document.querySelectorAll("#cart img")

let a = 0

function carros(){
    a++;
    if(a > carr.length - 1){
        a = 0;
    }

    carrs.style.transform = `translateX(${-a * 1000}px)`
}

setInterval(carros, 3000)