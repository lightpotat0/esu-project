//text hover

var text = window.document.getElementById('identidade')

text.addEventListener('mouseenter', sda)
text.addEventListener('mouseout', sair)

function sda(){
    text.innerHTML = `IDENTIDADE<br> VISUAL`
}

function sair(){
    text.innerHTML = `Identidade Visual`
}

var text1 = window.document.getElementById('blocos1')

text1.addEventListener('mouseenter', entrar)
text1.addEventListener('mouseout', out)

function entrar(){
    text1.innerHTML = `SOCIAL<br> MEDIA`
}

function out(){
    text1.innerHTML = `Social Media`
}

var text2 = window.document.getElementById('blocos')

text2.addEventListener('mouseenter', enter)
text2.addEventListener('mouseout', vazo)

function enter(){
    text2.innerHTML = `CAMPANHAS`
}

function vazo(){
    text2.innerHTML = `Campanhas`
}

var text3 = window.document.getElementById('blocos2')

text3.addEventListener('mouseenter', sas)
text3.addEventListener('mouseout', escap)

function sas(){
    text3.innerHTML = `AUDIOVISUAL`
}

function escap(){
    text3.innerHTML = `Audiovisual`
}

//imagem hover texto



