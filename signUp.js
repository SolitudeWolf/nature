
let picture = document.getElementById("lunbo")
let imgs = ["../picture/xss2.jpg", "../picture/xss3.jpg", "../picture/xss4.jpg", "../picture/xss5.jpg"];
var index = 0;
function qiehuan() {
    lunbo.src = imgs[index];
    index++;
    if (index > 3) {
        index = 0;
    }
}
setInterval("qiehuan()", 3500);
let returnBtn = document.getElementById('returnBtn')
returnBtn.onclick = function () {
    window.location.replace("logIn.html")
}

let bottom = document.getElementById('bottom')
let btn2 = document.getElementById('btn1')
let bottom_box = document.getElementById('bottom_box')
let sign = 1
btn1.onclick = function () {
    if (sign) {
        bottom_box.animate({
            transform: 'translate(0,85%)'
        }, {
            duration: 1000,
            easing: 'linear',
            iterations: 1,
            fill: "forwards"
        })
        btn1.innerHTML = "︿";
    }
    if (sign === -1) {
        bottom_box.animate({
            transform: 'translate(0,0)'
        }, {
            duration: 1000,
            easing: 'linear',
            iterations: 1,
            fill: "forwards"
        })
        btn1.innerHTML = "﹀";
    }
    sign *= -1;
}
let appearAdv=document.getElementById("appearAdv")
deleteAdvClick=function () {
    appearAdv.style.visibility = "visible";
}
appearAdvClick=function () {
    appearAdv.style.visibility = "hidden";
}

