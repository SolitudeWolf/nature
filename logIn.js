let picture = document.getElementById("picture")
let imgs = ["../picture/shanh1.jpg", "../picture/fengjingh2.jpg", "../picture/fengjingh3.jpg", "../picture/fengjingh4.jpg", "../picture/shanh6.jpg"];
var index = 0;
function qiehuan() {
    picture.src = imgs[index];
    index++;
    if (index > 4) {
        index = 0;
    }
}
setInterval("qiehuan()", 3500);
let signBtn = document.getElementById('signBtn')
signBtn.onclick = function () {
    window.location.replace("signUp.html")
}
let loginBtn = document.getElementById('loginBtn')
loginBtn.onclick = function () {
    window.location.replace("mainWindow.html")
}