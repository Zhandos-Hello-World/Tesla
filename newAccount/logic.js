var body = document.querySelector("body");
body.style.width = "0px";
body.style.height = "1024px";
var animation = setInterval(function(){
    if(parseInt(red.style.width,10) == 768)
        clearInterval(animation);
    red.style.width = parseInt(red.style.width,10)+2 +"px";
},10);


var firstNameV = document.getElementById("first_name")
var lastNameV = document.getElementById("last_name")
var userNameV = document.getElementById("basic-addon2")

var passwordV = document.getElementById("password")
var password2V = document.getElementById("password2")

function result(btn) {
    var firstName = firstNameV.innerText
    var lastName = lastNameV.innerText
    var userName = userNameV.innerText
    var password = passwordV.innerText
    var password2 = password2V.innerText

    if (checkName(firstName) && checkName(lastName) && checkName(userName) && checkPassword(password) && password === password2) {
        console.log("Valid value")
    }
    console.log("Invalid value")
}

function checkName(name) {
    return name.matches(/[A-Z]*/)
}
function checkPassword(password) {
    return password.matches(/[A-Z]*([0-9]|[a-z])*/)
}