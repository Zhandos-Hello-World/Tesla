let value = 6;

const dataCosts = Array(
    Array(87510, 127510),
    Array(53510, 58510),
    Array(87510, 127510),
    Array(39510, 53510)
)



const btns = document.querySelectorAll(".space")
const time = document.getElementById("time")
const cost = document.getElementById("cost")
const btnDiv = document.querySelector(".select-car")

const sum1 = document.querySelector(".sum1")
const sum2 = document.querySelector(".sum2")


function selected1() {
    sum1.innerHTML = dataCosts[btnDiv.selectedIndex][0]
    sum2.innerHTML = dataCosts[btnDiv.selectedIndex][1]
}


for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        value = btns[i].innerText
        time.innerText = "Time in months: " + value
    })
}


