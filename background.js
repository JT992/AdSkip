chrome.webNavigation.onCompleted.addListener((details) => {
    if (/^https:\/\/www\.youtube\.com\/*/.test(details.url)) (
        chrome.scripting.executeScript({ files: ['./foreground.js'], target: {tabId: details.tabId} })
    );
})
