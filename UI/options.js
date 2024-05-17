document.getElementById("urlForm").onsubmit = function () {
  var urls = document.getElementById("urls").value.split("\n");
  chrome.storage.sync.set({ urls: urls });
  return false;
};

chrome.storage.sync.get("urls", function (data) {
  document.getElementById("urls").value = data.urls.join("\n");
});
