const form = document.querySelector("#form");
const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#passwordConfirm");
const errorMsg = document.querySelector(".errorMsg");

const validateForm = () => {
  let noError = false;
  let firstPsw = false;

  // Valider userName
  if (userName.value.trim() === "") {
    setError(userName, "Veuillez inscrire votre nom d'utilisateur");
    noError = false;
  } else {
    setSuccess(userName);
  }

  // valider courriel
  if (userEmail.value.trim() === "") {
    setError(userEmail, "Veuillez inscrire un courriel");
    noError = false;
  } else if (!validateEmail(userEmail.value.trim())) {
    setError(userEmail, "Veuillez inscrire un courriel valide");
    noError = false;
  } else {
    setSuccess(userEmail);
  }

  // valider courriel
  if (password.value.trim() === "") {
    setError(password, "Veuillez inscrire un mot de passe");
    noError = false;
  } else if (password.value.trim().length < 8) {
    setError(password, "Votre courriel doit contenir au moins 8 caractères");
    noError = false;
  } else {
    setSuccess(password);
    firstPsw = true;
  }

  if (!firstPsw) {
    setError(passwordConfirm, "Ce mot de passe ne correspond pas");
    noError = false;
  } else if (password.value.trim() !== passwordConfirm.value.trim()) {
    setError(passwordConfirm, "Ce mot de passe ne correspond pas");
    noError = false;
  } else {
    setSuccess(passwordConfirm);
    noError = true;
  }

  return noError;
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
