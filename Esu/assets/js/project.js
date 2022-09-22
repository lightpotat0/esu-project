var firstval = 0;

function Carousel(){
    firstval += 10;
    document.getElementById('carousel').style.left = "-" + firstval + "%";
    if(firstval == 1200){
        document.getElementById('container-container').style.left = "0";
        firstval = 0;
        setTimeout(Carousel, 3000);
        return;
    }
    
    if(!(firstval%25)){ //pause every 400px
        setTimeout(Carousel, 1000);
        return;
    }
    
    runCarousel = setTimeout(Carousel, 20);
}

Carousel();
