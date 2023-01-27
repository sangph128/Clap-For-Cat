chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.text == "cat") {
        chrome.tabs.create({
            url: "https://cataas.com/cat"
        });

    }

})
