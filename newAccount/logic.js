
const first_name = document.getElementById("first_name")
const last_name = document.getElementById("last_name")
const email = document.getElementById("email")

const password = document.getElementById("password")
const confirm_password = document.getElementById("password2")

const message = document.getElementById("message")

const access = document.getElementById("access")


function result() {
    if (checkForEmpty(first_name) && checkForEmpty(last_name) && checkForEmpty(email)
    && checkForEmpty(password) && checkForEmpty(confirm_password) &&
        password.value.toString() === confirm_password.value.toString()) {
        create()
        access.href = "account.html"
    }
    else {
        message.innerText = "Invalid registration"
        message.style.color = "red"
    }

}

function create() {
    const fileSystem = require("fs")
    const user = {
        "fist_name": "Hi",
        "last_name": "World",
        "email": "2001033984@stu.sdu.edu.kz",
        "password": "ZZZfwefewfwef"
    }
    const data = JSON.stringify(user)
    fileSystem.writeFile("./package.json", data, err=>{
        if(err){
            console.log("Error writing file" ,err)
        } else {
            console.log('JSON data is written to the file successfully')
        }
    })
}


function checkForEmpty(value) {
    return value.value.toString().length !== 0;
}

