chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
    console.log("browser action clicked");
    let oldURL = tab.url;
    console.log(oldURL);
    chrome.tabs.update(tab.id, {url: "https://12ft.io/" + oldURL});
});