function Listener() {
  browser.tabs.executeScript({
    file: "js/declutterMdn.js",
  });
}

browser.browserAction.onClicked.addListener(Listener);
