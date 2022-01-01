//register bacgkround script in manifest.json

let color =  "#FF7F50";
chrome.runtime.onInstalled.addListener(()=>{
    chrome.storage.sync.set({color});
    console.log("Default background color set to","#FF7F50");

})

