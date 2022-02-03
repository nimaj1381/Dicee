let first_person_n = Math.floor(Math.random() * 6) + 1
let second_person_n = Math.floor(Math.random() * 6) + 1

let first_person = "./images/dice" + first_person_n + ".png";
let second_person = "./images/dice" + second_person_n + ".png";

if (first_person > second_person) {
    document.querySelector(".container h1").textContent = "🚩 First person Wins";
} else if (first_person < second_person) {
    document.querySelector(".container h1").textContent = "Second person Wins 🚩";
} else {
    document.querySelector(".container h1").textContent = "🚩 Draw 🚩";
}


document.querySelector(".dice .img1").setAttribute("src", first_person)
document.querySelector(".dice .img2").setAttribute("src", second_person)
