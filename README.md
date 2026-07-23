# 12ft-extension

A tiny Chrome/Chromium browser extension that opens the current page through
[12ft.io](https://12ft.io) with a single click, helping you get past soft
paywalls and "please subscribe" walls on articles.

## What it does

12ft.io is a service that loads a page the way Google's crawler sees it, which
often strips the paywall overlay. Normally you'd have to manually prepend
`https://12ft.io/` to a URL. This extension does that for you: click the toolbar
icon and the active tab is reloaded through 12ft.io.

## How it works

The extension is intentionally minimal — it's just a background script that
listens for clicks on the toolbar icon:

- [`manifest.json`](manifest.json) — Manifest V2 extension definition. Registers
  the background script and requests the `activeTab` permission.
- [`background.js`](background.js) — On icon click, reads the current tab's URL
  and navigates the tab to `https://12ft.io/<original-url>`.

```js
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.update(tab.id, { url: "https://12ft.io/" + tab.url });
});
```

## Installation

Since this extension isn't published to the Chrome Web Store, load it as an
unpacked extension:

1. Clone or download this repository.
2. Open `chrome://extensions` in Chrome (or a Chromium-based browser).
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select this repository's folder.
5. The extension icon appears in your toolbar.

> **Note:** This is a Manifest V2 extension. Manifest V2 is being phased out in
> favor of Manifest V3, so newer Chrome versions may restrict loading it.

## Usage

1. Navigate to an article behind a soft paywall.
2. Click the extension's toolbar icon ("hop the paywall").
3. The tab reloads through 12ft.io.

## Permissions

- `activeTab` — used to read the URL of the current tab and redirect it when you
  click the icon. The extension only acts on the tab you explicitly click for.

## Disclaimer

This extension is provided for educational purposes. Bypassing paywalls may
violate a site's terms of service. Please respect publishers and support the
journalism and content you value.

## Credits

Original author: Ben Edelstein. Powered by the [12ft.io](https://12ft.io)
service.
