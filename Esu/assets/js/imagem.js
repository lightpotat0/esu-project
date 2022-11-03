var imgAtual = "6.jpeg"
var imgAnterior = "01.png"


function trocar(){
    document.getElementById("img").src = imgAtual;
    let aux = imgAtual;
    imgAtual = imgAnterior;
    imgAnterior = aux
}
