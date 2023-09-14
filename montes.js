
let imgs = document.getElementsByTagName("img");
let len = imgs.length;
let current = 0;

let timer;

function wrapper() {
    frount();
    bind();
    autoplay();
}
wrapper();

function frount() {
    let mlen = Math.floor(len/2);
    let limg , rimg;
    for(let i=0;i<mlen;i++){


        limg = len+current-i-1;
        rimg = current+i+1;

        if(limg>=len){
            limg -= len;
        }
        if(rimg>=len){
            rimg -= len;
        }

        imgs[limg].style.transform= `translateX(`+(-150)*(i+1)+`px) translateZ(`+(200-i*100)+`px) rotateY(30deg)`;
        imgs[rimg].style.transform = `translateX(`+(150)*(i+1)+`px) translateZ(`+(200-i*100)+`px) rotateY(-30deg)`;
    }
    imgs[current].style.transform = `translateZ(300px)`;
}

function bind() {
    for(let i=0 ;i<len;i++){
        (function (i) {
            imgs[i].onclick=function () {
                current = i;
                frount();
            }
        })(i);
        imgs[i].onmouseenter=function () {
            clearInterval(timer);
        }
        imgs[i].onmouseout = function () {
            autoplay();
        }
    }
}

function autoplay() {
    timer = setInterval(function () {
        if(current>=len-1){
            current=0;

        }else {
            current++;
        }
        frount();
    },3000)
}

function returnClick(){
    window.location.replace("mainWindow.html");
}
