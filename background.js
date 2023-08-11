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
chrome.contextMenus.removeAll(function() {

  chrome.contextMenus.create({
    id: "openLinkCache", // Utiliser le même ID ici
    title: "Visualisation", // Modifier le titre si nécessaire
    contexts: ["link"],
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "openLinkCache" && info.linkUrl) {
    const cacheUrl = "https://www.google.com/search?q=cache:" + encodeURIComponent(info.linkUrl);
    chrome.tabs.create({ url: cacheUrl });
  }
});