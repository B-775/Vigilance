document.addEventListener("DOMContentLoaded", function () {
  // Récupère l'élément d'affichage du nom de domaine
  const domainDisplayElement = document.getElementById("displayArea");

  // Récupère les éléments des boutons et des zones de crédits et de visualisation
  const nightModeButton = document.getElementById("nightModeButton");
  const creditsButton = document.getElementById("creditsButton");
  const creditsArea = document.getElementById("creditsArea");
  const visuButton = document.getElementById("visuButton");
  const visuArea = document.getElementById("visuArea");
  const quizArea = document.getElementById("quizArea");
  const checkButton = document.getElementById("checkButton");
  const versionElement = document.getElementById("version");
  const domainSpan = document.createElement("span");

  //Version du manifest
  versionElement.textContent = chrome.runtime.getManifest().version;

  // Récupère l'URL de la page active
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const url = tabs[0].url;
    const domain = new URL(url).hostname;

    // Affiche le nom de domaine dans la popup
    domainSpan.style.fontSize = "18px";
    domainSpan.textContent = domain;
    domainDisplayElement.textContent = "Le nom de domaine est : ";
    domainDisplayElement.appendChild(domainSpan);
    // Gestion du mode nuit
    nightModeButton.addEventListener("click", function () {
      document.body.classList.toggle("night-mode");
    });

    // Gestion du bouton "Crédits"
    creditsButton.addEventListener("click", function () {
      creditsArea.style.display = creditsArea.style.display === "none" ? "block" : "none";
    });

    // Gestion du bouton "Visualisation"
    visuButton.addEventListener("click", function () {
      visuArea.style.display = visuArea.style.display === "none" ? "block" : "none";
    });      
    

    // Gestion du bouton "Check" (Scan)
    checkButton.addEventListener("click", function () {
      // Obtenir les onglets actifs
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        if (tabs.length > 0) {
          // Récupérer l'URL de l'onglet actif
          const currentUrl = tabs[0].url;

          // Former l'URL pour l'analyse sur URLVoid
          const scanUrl = 'https://www.urlvoid.com/scan/' + encodeURIComponent(domain);

          // Ouvrir un nouvel onglet avec l'URL formée
          chrome.tabs.create({ url: scanUrl });
        }
      });
    });
  });
});
