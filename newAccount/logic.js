var body = document.querySelector("body");
body.style.width = "0px";
body.style.height = "1024px";
var animation = setInterval(function(){
    if(parseInt(red.style.width,10) == 768)
        clearInterval(animation);
    red.style.width = parseInt(red.style.width,10)+2 +"px";
},10);