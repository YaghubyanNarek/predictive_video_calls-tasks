const email = document.querySelector(".email");
const submit = document.querySelector(".submit");
let isValid = '';

submit.onclick = () => {
    if (email.value == "") {
        alert("please enter your email address")
    }
    else {
        email.value.split('').forEach(item => {
            if (item == "@"){
                isValid = item;
            }
    })
    if (!isValid) {
        alert("Your email address is not valid");
    }
    else {
        alert("Success")
    }
    email.value = "";
    }
}