/*автор: Берлин Андрей.
дата: 31.12.21.
задача: открывает ссылку по нажатию на строку
имя: driverClick.js
язык: JavaScript*/

let q = document.getElementById("q");
let w = document.getElementById("w");
let e = document.getElementById("e");
let r = document.getElementById("r");

q.onclick = () => {
    document.location.href = "https://netwebappjs.github.io/constructorScript-tv-player/";
}
w.onclick = () => {
    document.location.href = "https://netwebappjs.github.io/html5-css-js-chrom-android-mediaPlayer/";
}

e.onclick = () => {
    document.location.href = "https://netwebappjs.github.io/InternetTV/";

}

r.onclick = () => {
    document.location.href = "https://netwebappjs.github.io/internetRadio1/";

}