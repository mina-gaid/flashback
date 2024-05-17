// background.js
chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    if (details.type === "main_frame" || details.type === "sub_frame") {
      var url = details.url;
      var archiveUrl = "https://archive.fo/" + url;
      return { redirectUrl: archiveUrl };
    }
  },
  {
    urls: urls,
    types: ["main_frame", "sub_frame"],
  },
  ["blocking"]
);
