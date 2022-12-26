if(innerWidth > 800){

var img = document.getElementById('img')
var img1 = document.getElementById('img1')
var img2 = document.getElementById('img2')
var tx1 = document.getElementById('nametx')
var tx2 = document.getElementById('nametx1')
var tx3 = document.getElementById('nametx2')

function trocar(){
    img.setAttribute('src', 'assets/img/3.jpeg')
    img1.setAttribute('src', 'assets/img/6.jpeg')
    img2.setAttribute('src', 'assets/img/5.jpeg')
    tx1.innerText = 'Cervejaria KURATO'
    tx2.innerText = 'Cervejaria KURATO'
    tx3.innerText = 'Cervejaria KURATO'
}

function trocar0(){
    img.setAttribute('src', 'assets/img/01.png')
    img1.setAttribute('src', 'assets/img/02.png')
    img2.setAttribute('src', 'assets/img/03.png')
    tx1.innerText = 'Salão da Cléo'
    tx2.innerText = 'Exú'
    tx3.innerText = 'Avia Delivery'
}

function trocar1(){
    img.setAttribute('src', 'assets/img/2.jpeg')
    img1.setAttribute('src', 'assets/img/4.jpeg')
    img2.setAttribute('src', 'assets/img/tec.jpeg')
    tx1.innerText = 'Cervejaria KURATO'
    tx2.innerText = 'Flyer'
    tx3.innerText = 'Galpão Tec-Branding'
}

function trocar2(){
    img.setAttribute('src', 'assets/img/campanha.jpeg')
    img1.setAttribute('src', 'assets/img/design.jpeg')
    img2.setAttribute('src', 'assets/img/estudio.jpeg')
    tx1.innerText = 'Hévila Ribeiro-Branding'
    tx2.innerText = 'Hévila Ribeiro-Branding'
    tx3.innerText = 'Hévila Ribeiro-Branding'
}

}