//Slide texto 

var left = document.getElementById('left')
var right = document.getElementById('right')
var esquerda = document.getElementById('esquerda')
var direita = document.getElementById('direita')
var text = document.getElementById('studio')
var cult = document.getElementById('culturar')
var num = document.getElementById('botaosobre')

esquerda.addEventListener('click', prox)
direita.addEventListener('click', next)

function next(){
    num.innerHTML = '02/04'
    cult.innerHTML = `Saaaaaaaa`
}

