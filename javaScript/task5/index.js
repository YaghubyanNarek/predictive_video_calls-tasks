const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.onclick = () =>{
        document.body.style.background = button.classList;
    }
})