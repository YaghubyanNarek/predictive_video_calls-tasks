const form = document.querySelector(".form");
const submit = document.querySelector(".submit");
const names = document.querySelector(".name");
const email = document.querySelector(".email");
const err = document.querySelector(".err");
console.log(err)

submit.onclick = (e) => {
    e.preventDefault();
    if (names.value == "" || email.value == "") {
        err.innerHTML = "Enter your both EMail and Name";
    }
    else {
        err.innerHTML = "Good job";
    }
}
