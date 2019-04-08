var main = document.getElementById("main");
var body = document.querySelector("body");
setInterval(function(){
    main.classList.toggle("text-dark");
    body.classList.toggle("bg-dark");
},5);
