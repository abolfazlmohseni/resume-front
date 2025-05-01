const moodBTN = document.querySelector(".circleMood")

let mood = localStorage.getItem("dark")

window.addEventListener("DOMContentLoaded", () => {

    if (mood === "true") {
        document.body.classList.add("dark")
    }
})

moodBTN.addEventListener("click", () => {
    mood = localStorage.getItem("dark")
    if (mood === "true") {
        localStorage.setItem("dark", "false")
        document.body.classList.remove("dark")
    }
    else {
        localStorage.setItem("dark", "true")
        document.body.classList.add("dark")
    }

})