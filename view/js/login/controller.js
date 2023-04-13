function redirectToRegister() {
    window.location.href = "register.html";
}

function goToSuccessfulRegister() {
    window.location.href = "success-register.html";
}


let enterSiteButton = document.getElementById("enter-site");
enterSiteButton.classList.add("disabled") = true;
enterSiteButton.ariaDisabled = true;

function verifyLogin(){

    // Get the value 'Email' from the form and test it.
    let email = document.getElementById("inputEmail").value;
    let alertMessage = document.getElementById("alert-msg");
    let successEmail = false;
    if (!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email))) {
        alertMessage.innerHTML = "El correo electrónico ingresado no es válido.";
        alertMessage.classList.remove("disabled");
        alertMessage.ariaDisabled = false;
    }
    else {
        alertMessage.classList.add("disabled");
        alertMessage.ariaDisabled = true;
        successEmail = true;
    }

    // Get the value 'Password' from the form and test it.
    let password = document.getElementById("inputPass").value;
    let successPass = false;
    if (!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password))) {
        alertMessage.innerHTML = "La contraseña ingresada no es válida.";
        alertMessage.classList.remove("disabled");
        alertMessage.ariaDisabled = false;
    }
    else {
        alertMessage.classList.add("disabled");
        alertMessage.ariaDisabled = true;
        successPass = true;
    }

    // If the email and password are correct, the button is enabled.
    if (successEmail && successPass) {
        enterSiteButton.classList.remove("disabled");
        enterSiteButton.ariaDisabled = false;
    }
    
    let valid = false;
    if ((email == "testusuario1@gmail.com" && password == "HolaMundo") || (email == "testusuario2@gmail.com" && password == "HolaMundo")) { 
        valid = true;
    }
    return valid;
} 

document.addEventListener("click", (e) => {
    if (!e.target.matches("#enter-site")) return false;
    if (verifyLogin()) {
        window.location.href = "index.html";
    }
    else {
        alert("Usuario o contraseña incorrectos");
    }
});
