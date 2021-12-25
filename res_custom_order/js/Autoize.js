let value = 6;
let costValue = 87510;
let months = 6;
let status = false


const dataCosts = Array(
    Array(87510, 127510),
    Array(53510, 58510),
    Array(87510, 127510),
    Array(39510, 53510)
)
const dataName = Array(
    "Model S",
    "Model X",
    "Model 3",
    "Roadster")


const btns = document.querySelectorAll(".space")
const time = document.getElementById("time")
const cost = document.getElementById("cost")
const btnDiv = document.querySelector(".select-car")

const sum1 = document.querySelector(".sum1")
const sum2 = document.querySelector(".sum2")

const version1 = document.querySelector(".version1")
const version2 = document.querySelector(".version2")

const get_car = document.querySelector(".get_car")

get_car.addEventListener("click", function() {
    alert("Your application is being processed. After processing, we will call you")
})

function currentCost() {
    cost.innerHTML = "$" + ((costValue / months) + ((costValue / months) * 0.2099)).toFixed(2)
}


function selected1() {
    sum1.innerHTML = dataCosts[btnDiv.selectedIndex][0]
    sum2.innerHTML = dataCosts[btnDiv.selectedIndex][1]

    version1.innerHTML = dataName[btnDiv.selectedIndex]
    version2.innerHTML = dataName[btnDiv.selectedIndex] + "  Plaid"

    if (status) {
        costValue = dataCosts[btnDiv.selectedIndex][1]
    }
    else {
        costValue = dataCosts[btnDiv.selectedIndex][0]
    }
    currentCost()
}


for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        value = btns[i].innerText
        time.innerText = "Time in months: " + value
        months = value
        currentCost()
    })
}


document.getElementById("flexRadioDefault1").addEventListener("click", function () {
    status = false
    selected1()
})
document.getElementById("flexRadioDefault2").addEventListener("click", function () {
    status = true
    selected1()
})

currentCost()



