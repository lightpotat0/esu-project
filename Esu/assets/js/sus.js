function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano)  {
        window.alert('tente novamente!')
    } else {
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)     
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked){
         genero = 'Homem'
            if (idade >= 0 && idade < 13) {
                //criança
                img.setAttribute('src', 'menino.jpg')
            } else if (idade < 18){
                //adolescente
                img.setAttribute('src', 'eboy.jpg')
            } else if (idade < 60){
                //adulto
                img.setAttribute('src', 'homi.jpg')
            } else {
                //véi
                img.setAttribute('src', 'veio.jpg')
            }
        }else if (sex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 13) {
                //criança
                img.setAttribute('src', 'menina.jpg')
            } else if (idade < 18){
                //adolescente
                img.setAttribute('src', 'egirl.jpg')
            } else if (idade < 60){
                //adulto
                img.setAttribute('src', 'muie.jpg')
            } else {
                //véi
                img.setAttribute('src', 'veia.jpg')
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}