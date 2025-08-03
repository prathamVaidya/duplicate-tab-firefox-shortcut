// Content script to handle keyboard events and prevent default behavior
document.addEventListener('keydown', (event) => {
  // Check for Command+Shift+D (Mac) or Ctrl+Shift+D (Windows/Linux)
  const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  const modifierKey = isMac ? event.metaKey : event.ctrlKey;
  
  if (modifierKey && event.shiftKey && (event.key === 'd' || event.key === 'D')) {
    // Prevent default behavior
    event.preventDefault();
    event.stopPropagation();
    
    // Send message to background script to duplicate tab
    browser.runtime.sendMessage({ type: "duplicateTab" });
    
    return false;
  }
});

// Also listen for the command from the background script
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "duplicateTab") {
    // The background script will handle the actual duplication
    return true;
  }
}); 