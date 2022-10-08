var map = document.querySelector('#mapa');
var text

var divs = [document.getElementById("farmac"),document.getElementById("UBS"), document.getElementById("satancasa"), document.getElementById("hosp")]

let a = 0;
function mapaUBS(){
    map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d59807.81866068067!2d-54.63827028238282!3d-20.465658678751822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1subs!5e0!3m2!1spt-BR!2sbr!4v1664580373181!5m2!1spt-BR!2sbr')
    document.getElementById("textMap").innerHTML = "UBS"
    divs[0].style.backgroundColor = "#2d1e41"
    divs[1].style.backgroundColor = "#D2D2D2"
    divs[2].style.backgroundColor = "#2d1e41"
    divs[3].style.backgroundColor = "#2d1e41" 

    divs[0].style.color = "white"
    divs[1].style.color = "#3A0900"
    divs[2].style.color = "white"
    divs[3].style.color = "white"

    divs[0].style.border = "1px solid black"
    divs[1].style.border = "none"
    divs[2].style.border = "1px solid black"
    divs[3].style.border = "1px solid black"
}

function mapaSantaCasa(){
    map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14952.203260649472!2d-54.61782111996032!3d-20.463105976130755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssanta%20casa!5e0!3m2!1spt-BR!2sbr!4v1664580237558!5m2!1spt-BR!2sbr')
    document.getElementById("textMap").innerHTML = "Santa Casa"
    divs[0].style.backgroundColor = "#2d1e41"
    divs[1].style.backgroundColor = "#2d1e41"
    divs[2].style.backgroundColor = "#D2D2D2"
    divs[3].style.backgroundColor = "#2d1e41"

    divs[0].style.color = "white"
    divs[1].style.color = "white"
    divs[2].style.color = "#3A0900"
    divs[3].style.color = "white"

    divs[0].style.border = "1px solid black"
    divs[1].style.border = "1px solid black"
    divs[2].style.border = "none"
    divs[3].style.border = "1px solid black"
}


function mapaHospitais(){
    map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d59797.99207506504!2d-54.62242634995547!3d-20.490868386123733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shospitais!5e0!3m2!1spt-BR!2sbr!4v1664579955549!5m2!1spt-BR!2sbr')
    document.getElementById("textMap").innerHTML = "Hospitais"
    divs[0].style.backgroundColor = "#2d1e41"
    divs[1].style.backgroundColor = "#2d1e41"
    divs[2].style.backgroundColor = "#2d1e41"
    divs[3].style.backgroundColor = "#D2D2D2"

    divs[0].style.color = "white"
    divs[1].style.color = "white"
    divs[2].style.color = "white"
    divs[3].style.color = "#3A0900"

    divs[0].style.border = "1px solid black"
    divs[1].style.border = "1px solid black"
    divs[2].style.border = "1px solid black"
    divs[3].style.border = "none"

}

function mapaFarm(){
    map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14950.898962011172!2d-54.62055953420411!3d-20.476495773198472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sFarm%C3%A1cias!5e0!3m2!1spt-BR!2sbr!4v1664492291394!5m2!1spt-BR!2sbr')
    document.getElementById("textMap").innerHTML = "Farmácias"
    divs[0].style.backgroundColor = "#D2D2D2"
    divs[1].style.backgroundColor = "#2d1e41"
    divs[2].style.backgroundColor = "#2d1e41"
    divs[3].style.backgroundColor = "#2d1e41"

    divs[0].style.color = "#3A0900"
    divs[1].style.color = "white"
    divs[2].style.color = "white"
    divs[3].style.color = "white"

    divs[0].style.border = "none"
    divs[1].style.border = "1px solid black"
    divs[2].style.border = "1px solid black"
    divs[3].style.border = "1px solid black"

}
