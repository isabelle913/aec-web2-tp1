console.log("Fichier install");

let deferredInstallPrompt = null;

const installButton = document.getElementById("butInstall");

function saveBeforeInstallPromptEvent(evt) {
  deferredInstallPrompt = evt;
  installButton.removeAttribute("hidden");
}
function installPWA() {
  deferredInstallPrompt.prompt();
  evt.srcElement.setAttribute("hidden", true);

  deferredInstallPrompt.userChoice.then((choice) => {
    if (choice.outcome === "accepted") {
      console.log("User accepted the A2HS prompt", choice);
    } else {
      console.log("User dismissed the A2HS prompt", choice);
    }
    deferredInstallPrompt = null;
  });
}
function logAppInstalled(evt) {
  console.log("Weather App was installed.", evt);
}

installButton.addEventListener("click", installPWA);
window.addEventListener("beforeinstallprompt", saveBeforeInstallPromptEvent);
window.addEventListener("appinstalled", logAppInstalled);
