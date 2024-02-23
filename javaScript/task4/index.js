const button = document.querySelector(".click");
const count = document.querySelector(".count");

button.onclick = () =>{
    count.innerHTML++;
}