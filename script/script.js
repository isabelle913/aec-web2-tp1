const form = document.querySelector("#form");
const lastName = document.querySelector("#lastName");
const firstName = document.querySelector("#firstName");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const errorMsg = document.querySelector(".error-message");

const validateForm = () => {
  let noError = [];

  // Valider lastName
  if (lastName.value.trim() === "") {
    setError(lastName, "Veuillez inscrire votre nom de famille");
    noError.push(false);
  } else {
    setSuccess(lastName);
    noError.push(true);
  }
  // Valider firstName
  if (firstName.value.trim() === "") {
    setError(firstName, "Veuillez inscrire votre prénom");
    noError.push(false);
  } else {
    setSuccess(firstName);
    noError.push(true);
  }

  // valider courriel
  if (email.value.trim() === "") {
    setError(email, "Veuillez inscrire votre courriel");
    noError.push(false);
  } else if (!validateEmail(email.value.trim())) {
    setError(email, "Veuillez inscrire un courriel valide");
    noError.push(false);
  } else {
    setSuccess(email);
    noError.push(true);
  }

  // Valider message
  if (message.value.trim() === "") {
    setError(message, "Veuillez inscrire votre message");
    noError.push(false);
  } else {
    setSuccess(message);
    noError.push(true);
  }

  if (noError.length === 4 && !noError.includes(false)) {
    console.log(4);
    return true;
  } else {
    return false;
  }
};

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error-message");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("succes");
};
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error-message");

  errorDisplay.innerText = "";
  inputControl.classList.add("succes");
  inputControl.classList.remove("error");
};

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
};
