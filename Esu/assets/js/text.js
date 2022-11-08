//caixa pop up

//box

function iniciaModal(modalID) {
    const modal = document.getElementById(modalID)
    modal.classList.add('mostrar')
    modal.addEventListener('click', (e) => {
        if (e.target.id == modalID || e.target.classList == 'fechar') {
            modal.classList.remove('mostrar')
        }
    })
}

const box = document.querySelector('.box')
box.addEventListener('click', () => iniciaModal('modal-projeto'))

//caixa

function iniciaModal1(modalID1) {
    const modal1 = document.getElementById(modalID1)
    modal1.classList.add('mostrar')
    modal1.addEventListener('click', (ev) => {
        if (ev.target.id == modalID1 || ev.target.classList == 'fechar') {
            modal1.classList.remove('mostrar')
        }
    })
}

const caixa = document.querySelector('.caixa')
caixa.addEventListener('click', () => iniciaModal('modal-projeto'))

//caixa1

function iniciaModal2(modalID2) {
    const modal2 = document.getElementById(modalID2)
    modal2.classList.add('mostrar')
    modal2.addEventListener('click', (eve) => {
        if (eve.target.id == modalID2 || eve.target.classList == 'fechar') {
            modal2.classList.remove('mostrar')
        }
    })
}

const caixa1 = document.querySelector('.caixa1')
caixa1.addEventListener('click', () => iniciaModal('modal-projeto'))

//formulario 

var tag1 = document.getElementById('servico')
var tag2 = document.getElementById('servico1')
var tag3 = document.getElementById('servico2')
var tag4 = document.getElementById('servico3')
var tag5 = document.getElementById('servico4')
var tag6 = document.getElementById('servico5')

tag1.addEventListener('click', redc)
tag2.addEventListener('click', redc1)
tag3.addEventListener('click', redc2)
tag4.addEventListener('click', redc3)
tag5.addEventListener('click', redc4)
tag6.addEventListener('click', redc5)

function redc() {
    tag1.style.color = '#FF2600'
    tag1.style.borderColor = '#FF2600'
}

function redc1() {
    tag2.style.color = '#FF2600'
    tag2.style.borderColor = '#FF2600'
}

function redc2() {
    tag3.style.color = '#FF2600'
    tag3.style.borderColor = '#FF2600'
}

function redc3() {
    tag4.style.color = '#FF2600'
    tag4.style.borderColor = '#FF2600'
}

function redc4() {
    tag5.style.color = '#FF2600'
    tag5.style.borderColor = '#FF2600'
}

function redc5() {
    tag6.style.color = '#FF2600'
    tag6.style.borderColor = '#FF2600'
}

tag1.addEventListener('dblclick', nonec)
tag2.addEventListener('dblclick', nonec1)
tag3.addEventListener('dblclick', nonec2)
tag4.addEventListener('dblclick', nonec3)
tag5.addEventListener('dblclick', nonec4)
tag6.addEventListener('dblclick', nonec5)

function nonec() {
    tag1.style.color = '#000'
    tag1.style.borderColor = '#b7b7b7'
}

function nonec1() {
    tag2.style.color = '#000'
    tag2.style.borderColor = '#b7b7b7'
}

function nonec2() {
    tag3.style.color = '#000'
    tag3.style.borderColor = '#b7b7b7'
}

function nonec3() {
    tag4.style.color = '#000'
    tag4.style.borderColor = '#b7b7b7'
}

function nonec4() {
    tag5.style.color = '#000'
    tag5.style.borderColor = '#b7b7b7'
}

function nonec5() {
    tag6.style.color = '#000'
    tag6.style.borderColor = '#b7b7b7'
}

//ver mais





//hamburguer

var menu = document.getElementById('menu')
var boxmenu = document.getElementById('boxmenu')

menu.onclick = function openmenus() {
        menu.classList.toggle("openmenu")
        
        if(boxmenu.style.display == 'block'){
            boxmenu.style.display = 'none'
        } else{
            boxmenu.style.display = 'block'
        }
}



