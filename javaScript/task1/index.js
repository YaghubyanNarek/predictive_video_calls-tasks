const div = document.querySelector(".root");
const hide = document.querySelector(".hide");
let isPressed = false;

hide.onclick = () => {
    div.classList.toggle('hideadd');
    hide.innerHTML = isPressed ? "Hide" : "Show";
    isPressed = !isPressed;
}