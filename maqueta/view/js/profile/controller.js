/*********************Menu*********************/

((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);


// Nuevo teléfono

let phone = {
  type: '',
  number: ''
};

document.addEventListener("click", (e) => {
  if (!e.target.matches("#new-phone-btn")) return false;
  if (document.getElementById("new-phone-btn").innerHTML === "Nuevo teléfono") document.getElementById("new-phone-btn").innerHTML = "Cancelar";
  else if (document.getElementById("new-phone-btn").innerHTML === "Cancelar") document.getElementById("new-phone-btn").innerHTML = "Nuevo teléfono";
  let select = document.querySelector('select');
  let input = document.querySelector('input');
  let confirmNewPhone = document.querySelector('#confirm-new-phone-btn');
  if (select.value === 'none-phone') {
    confirmNewPhone.classList.add("disabled");
    confirmNewPhone.ariaDisabled = true;
  }

  let validateChecks = {
    selectCheck: false,
    inputCheck: false
  }

  select.addEventListener('change', function() {
    let selected = select.value;
    if (selected !== "none-phone") {
      validateChecks.selectCheck = true;
    }
    else {
      validateChecks.selectCheck = false;
    }
  });

  input.addEventListener('input', function() {
    let inputText = input.value;
    if (inputText !== "" && inputText.length === 8) {
      validateChecks.inputCheck = true;
    }
    else {
      validateChecks.inputCheck = false;
    }
  });

  if (validateChecks.selectCheck && validateChecks.inputCheck) {
    confirmNewPhone.classList.remove("disabled");
    confirmNewPhone.ariaDisabled = false;
  }

  confirmNewPhone.addEventListener("click", function() {
    phone.type = select.value;
    phone.number = input.value;
    console.log(phone);
  });

});

// Nuevo correo

let email = {
  email: ''
}

let clickNewEmailBtn = document.addEventListener("click", (e) => {
  if (!e.target.matches("#new-email-btn")) return false;
  if (document.getElementById("new-email-btn").innerHTML === "Nuevo email") {
    document.getElementById("new-email-btn").innerHTML = "Cancelar";
    return true;
  }
  else if (document.getElementById("new-email-btn").innerHTML === "Cancelar") {
    document.getElementById("new-email-btn").innerHTML = "Nuevo email";
    return false;
  }
});

if (clickNewEmailBtn) {
  let confirmNewEmail = document.querySelector('#confirm-new-email-btn');

  function validateEmail() {
    let emailUsername = document.getElementById("email-username").value;
    let emailDomain = document.getElementById("email-domain").value;
    let emailComplete = emailUsername + "@" + emailDomain;
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (emailRegex.test(emailComplete)) {
      confirmNewEmail.classList.remove("disabled");
      confirmNewEmail.ariaDisabled = false;
      email.email = emailComplete;
      return true;
    } else {
      confirmNewEmail.classList.add("disabled");
      confirmNewEmail.ariaDisabled = true;
      return false;
    }
  }
  if (validateEmail()) {
    confirmNewEmail.classList.add("disabled");
    confirmNewEmail.ariaDisabled = true;
  }
  else {
    confirmNewEmail.classList.remove("disabled");
    confirmNewEmail.ariaDisabled = false;
  }

  confirmNewEmail.addEventListener("click", function() {
    return email;
  });
}


// Email

