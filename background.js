// Écoute le clic sur l'icône de l'extension
chrome.action.onClicked.addListener(function (tab) {
  // Obtient l'URL de la page active
  const url = tab.url;

  // Récupère le nom de domaine en utilisant l'API URL
  const domain = new URL(url).hostname;

  // Envoie le nom de domaine à la page popup
  chrome.action.setPopup({ popup: "popup.html" });
  chrome.runtime.sendMessage({ action: "displayDomain", domain: domain });
});

// Crée le menu contextuel pour la visualisation du cache
chrome.contextMenus.create({
  id: "openLinkCache",
  title: "Visualisation du cache",
  contexts: ["link"],
});

// Gestionnaire d'événement pour le menu de visualisation du cache
chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "openLinkCache" && info.linkUrl) {
    const cacheUrl = "https://www.google.com/search?q=cache:" + encodeURIComponent(info.linkUrl);
    chrome.tabs.create({ url: cacheUrl });
  }
});

/*
chrome.contextMenus.create({
  id: "performWhois",
  title: "Effectuer une recherche WHOIS",
  contexts: ["link"],
});

// Gestionnaire d'événement pour le menu de recherche WHOIS
chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "performWhois" && info.linkUrl) {
    const whoisUrl = "https://www.whois.com/whois/" + encodeURIComponent(info.linkUrl);
    chrome.tabs.create({ url: whoisUrl });
  }
});
*/