console.log("sw_omnibox");console.log("sw_tips");console.log("I am service_worker");chrome.runtime.onInstalled.addListener(()=>{chrome.action.setBadgeText({text:"OFF"})});const o="https://developer.chrome.com/docs/extensions",s="https://developer.chrome.com/docs/webstore";chrome.action.onClicked.addListener(async e=>{if(console.log(e.url),e.url.startsWith(o)||e.url.startsWith(s)){const t=await chrome.action.getBadgeText({tabId:e.id})==="ON"?"OFF":"ON";await chrome.action.setBadgeText({tabId:e.id,text:t})}});chrome.runtime.onInstalled.addListener(({reason:e})=>{e==="install"&&chrome.storage.local.set({apiSuggestions:["tabs","storage","scripting"]})});