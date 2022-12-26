// References to DOM Elements
const prevBtn = document.querySelector("#btnPrevious");
const nextBtn = document.querySelector("#btnNext");
const book = document.querySelector("#page");
const numeracao = document.getElementById('botaosobre')

const paper1 = document.querySelector("#pag");
const paper2 = document.querySelector("#pag1");
const paper3 = document.querySelector("#pag2");
const paper4 = document.querySelector("#pag3");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 4;
let maxLocation = numOfPapers + 1;

prevBtn.style.opacity = "0.4"
numeracao.style.animation = 'none'


function goNextPage() {
    if (currentLocation < maxLocation) {
        switch (currentLocation) {
            case 1:
                paper2.style.display = 'block'
                paper1.style.display = 'none'
                prevBtn.style.opacity = "1"
                numeracao.innerHTML = "02/04"
                console.log(currentLocation)
                break;
            case 2:
                paper3.style.display = 'block'
                paper2.style.display = 'none'
                numeracao.innerHTML = "03/04"
                console.log(currentLocation)
                break;
            case 3:
                paper4.style.display = 'block'
                paper3.style.display = 'none'
                nextBtn.style.opacity = "0.4"
                numeracao.innerHTML = "04/04"
                console.log(currentLocation)
                break;
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if (currentLocation > 1) {
        switch (currentLocation) {
            case 2:
                paper1.style.display = 'block'
                paper2.style.display = 'none'
                paper3.style.display = 'none'
                paper4.style.display = 'none'
                prevBtn.style.opacity = "0.4"
                numeracao.innerHTML = "01/04"
                break;
            case 3:
                paper1.style.display = 'none'
                paper2.style.display = 'block'
                paper3.style.display = 'none'
                paper4.style.display = 'none'
                numeracao.innerHTML = "02/04"
                break;
            case 4:
                paper1.style.display = 'none'
                paper2.style.display = 'none'
                paper3.style.display = 'block'
                paper4.style.display = 'none'
                nextBtn.style.opacity = "1"
                numeracao.innerHTML = "03/04"
                break;
        }

        currentLocation--;
    }
}