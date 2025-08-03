// Listen for the keyboard shortcut command
browser.commands.onCommand.addListener(async (command) => {
  if (command === "duplicate-tab") {
    try {
      // Get the currently active tab
      const [activeTab] = await browser.tabs.query({ active: true, currentWindow: true });
      
      if (activeTab) {
        // Duplicate the active tab
        await browser.tabs.duplicate(activeTab.id);
      }
    } catch (error) {
      console.error("Error duplicating tab:", error);
    }
  }
});

// Listen for messages from content script
browser.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.type === "duplicateTab") {
    try {
      // Get the currently active tab
      const [activeTab] = await browser.tabs.query({ active: true, currentWindow: true });
      
      if (activeTab) {
        // Duplicate the active tab
        await browser.tabs.duplicate(activeTab.id);
      }
    } catch (error) {
      console.error("Error duplicating tab:", error);
    }
  }
}); 