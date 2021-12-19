let value = 6;

const btns = document.querySelectorAll(".space")
const time = document.getElementById("time")

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        value = btns[i].innerText
        time.innerText = "Time in months: " + value
        //setDefault()

        // btns[i].style.background="rgb(253,29,29)";
        // btns[i].style.background="linear-gradient(90deg, rgba(253,29,29,1) 45%, rgba(252,176,69,1) 100%)";
    })
}
// function setDefault() {
//     const btns = document.querySelectorAll(".space")
//     for (let t = 0; t < btns.length; t++) {
//         btns[t].addEventListener("click", function () {
//             btns[t].style.background="#F7F7FAFF"
//         })
//     }
// }