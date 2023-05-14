var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (!mutation.addedNodes) return;
    for (let i = 0; i < mutation.addedNodes.length; i++) {
      let node = mutation.addedNodes[i];
      if (node.tagName === "SCRIPT" && node?.src != null) {
        if (node.src.includes("economy.js")) {
          let overwritenFunction = document.createElement("script");
          overwritenFunction.type = "text/javascript";
          overwritenFunction.src = chrome.runtime.getURL("js/OverwrittenFunction.js");
          document.head.appendChild(overwritenFunction);
        } else if (node.src.includes("shared_responsive_adapter")) {
          let barRenderer = document.createElement("script");
          barRenderer.type = "text/javascript";
          barRenderer.src = chrome.runtime.getURL("js/barRenderer.js");
          document.head.appendChild(barRenderer);
          observer.disconnect();
        }
      }
    }
  });
});

observer.observe(document, {
  childList: true,
  subtree: true,
  attributes: false,
  characterData: false,
});
