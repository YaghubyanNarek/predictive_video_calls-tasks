const nav = document.querySelectorAll(".nav");

nav.forEach(item => {
    item.onmousemove = () =>{
        item.classList.add("onHover");
    }
    item.onmouseleave = () =>{
        item.classList.remove("onHover");
    }
})