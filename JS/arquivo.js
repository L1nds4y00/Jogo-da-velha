var jogador1 = '<img src="img/lightsaber.png">';
var jogador2 = '<img src="img/sdeath-star.png">';
var jogada = true;


function clicar(area) {
    if (area.innerHTML == '') {
        if (jogada) {
            area.innerHTML = jogador1;
            jogada = false;
        } else if (!jogada) {
            area.innerHTML = jogador2;
            jogada = true;
        }
        jogadores(area);
    }
}


function jogadores(area) {
    var box1 = document.getElementById('box1');
    var box2 = document.getElementById('box2');
    var box3 = document.getElementById('box3');
    var box4 = document.getElementById('box4');
    var box5 = document.getElementById('box5');
    var box6 = document.getElementById('box6');
    var box7 = document.getElementById('box7');
    var box8 = document.getElementById('box8');
    var box9 = document.getElementById('box9');

    var vencedor = ''

    if ((box1.innerHTML == box2.innerHTML) && (box2.innerHTML == box3.innerHTML)) {

        vencedor = box1.innerHTML;
    }

    else if ((box4.innerHTML == box5.innerHTML) && (box5.innerHTML == box6.innerHTML)) {
        vencedor = box4.innerHTML;
    }

    else if ((box7.innerHTML == box8.innerHTML) && (box8.innerHTML == box9.innerHTML)) {
        vencedor = box7.innerHTML;
    }
    else if ((box1.innerHTML == box4.innerHTML) && (box4.innerHTML == box7.innerHTML)) {
        vencedor = box1.innerHTML;
    }
    else if ((box2.innerHTML == box5.innerHTML) && (box5.innerHTML == box8.innerHTML)) {
        vencedor = box2.innerHTML;
    }
    else if ((box3.innerHTML == box6.innerHTML) && (box6.innerHTML == box9.innerHTML)) {
        vencedor = box3.innerHTML;
    }

    else if ((box1.innerHTML == box5.innerHTML) && (box5.innerHTML == box9.innerHTML)) {
        vencedor = box1.innerHTML;
    }
    else if ((box3.innerHTML == box5.innerHTML) && (box5.innerHTML == box7.innerHTML)) {
        vencedor = box3.innerHTML;
    }

    if (vencedor != '') {
        if (vencedor == jogador1) {

        document.getElementById("mascara").style.backgroundImage = "url('img/yoda.png')";
        document.getElementById("mascara").style.display = "block"
        document.getElementById("mascara").style.backgroundRepeat = "no-repeat"
        document.getElementById("mascara").style.backgroundPosition = "center";;

        } else

        document.getElementById("mascara").style.backgroundImage = "url('img/darth-vader.png')";
        document.getElementById("mascara").style.display = "block"
        document.getElementById("mascara").style.backgroundRepeat = "no-repeat"
        document.getElementById("mascara").style.backgroundPosition = "center";
    }
    else if ((vencedor == '') && (box1.innerHTML && box2.innerHTML && box3.innerHTML && box4.innerHTML && box5.innerHTML && box6.innerHTML && box7.innerHTML && box8.innerHTML && box9.innerHTML)) {

        document.getElementById("mascara").style.backgroundImage = "url('img/palpatine.png')";
        document.getElementById("mascara").style.display = "block"
        document.getElementById("mascara").style.backgroundRepeat = "no-repeat"
        document.getElementById("mascara").style.backgroundPosition = "center"

    }

}
function novo(area) {
    location.reload();
}


