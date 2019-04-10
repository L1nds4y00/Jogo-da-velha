var jogador1 = 'img/death-star.png';
var jogador2 = 'img/lightsaber.png';
var velha = 'img/palpatine.png';
var jogada = true;




function Clicar(area) {
    if (jogada) {
        area.innerHTML = `<img src= "${jogador1}" style= " width: 140px" "height: 50px" />`;
        jogada = false;
    } else if (!jogada) {
        area.innerHTML = `<img src= "${jogador2}" style= " width: 140px" "height: 8 0px" />`;
        jogada = true;

    }
}
