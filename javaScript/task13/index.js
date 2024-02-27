const names = document.querySelector(".name");
const email = document.querySelector(".email");
const save = document.querySelector(".save");
const nameIs = document.querySelector(".nameIs");
const emailIs = document.querySelector(".emailIs");

save.onclick = (e) => {
    e.preventDefault();
    
    if (names.value !== "" && email.value !== "") {
        const info = { name: names.value, email: email.value };
        localStorage.setItem("name", JSON.stringify(info));
        const storedInfo = JSON.parse(localStorage.getItem("name"));
      
        nameIs.innerHTML = nameIs.innerHTML + " " + storedInfo.name ;
        emailIs.innerHTML = emailIs.innerHTML + " " + storedInfo.email;    
    }
};
