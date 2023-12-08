'use strict'


const botao = document.getElementById('botao')

function aparecer(){
    const atividades = document.getElementById('atividades')
    atividades.classList.toggle('display')
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.play();
}

botao.addEventListener('click', aparecer)

var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });