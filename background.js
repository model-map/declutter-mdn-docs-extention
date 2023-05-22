function Listener() {
  browser.tabs.executeScript({
    file: "declutterMdn.js",
  });
}

browser.browserAction.onClicked.addListener(Listener);
