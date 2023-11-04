chrome.runtime.onInstalled.addListener(function () {
	chrome.storage.sync.set({ color: '#3aa757' }, function () {
		console.log('The color is green.')
	})
})

async function getCurrentTab() {
	let queryOptions = { active: true, lastFocusedWindow: true }
	// `tab` will either be a `tabs.Tab` instance or `undefined`.
	let [tab] = await chrome.tabs.query(queryOptions)
	return tab
}

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	//console.log("tabId: " + tabId + " changeInfo: " + changeInfo + " tab: " + tab);
	//console.log(changeInfo);
	//console.log(tab);
	//console.log(tab.url);
  chrome.scripting.executeScript(
    {
      target: { tabId: tabId },
      files: ["content.js"],
    },
    () => {
      console.log("Injected content.js");
    }
  );
	// getCurrentTab().then((tab) => {
	// 	console.log(tab.url)
	// })
})
