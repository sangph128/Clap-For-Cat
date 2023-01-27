window.onload = () => {

    chrome.tabs.query({ active: true, currentWindow: true }, (activeTab) => {
      const tabId = activeTab[0].id;
      chrome.tabs.sendMessage(tabId, { text: "cat_count" }, onCatCount);
    });
    
  };

  const onCatCount = () => {
    // https://cataas.com/cat?size=350
    document.getElementById(
      "cat_image"

    ).src = `https://cataas.com/cat?size=350`;
  };