const button = document.querySelector(".display");
const userINput = document.querySelector(".userInput");

button.onclick = () =>{
    userINput.value == "" ? alert("There is nothing you did type") : alert(userINput.value);
}