# Duplicate Tab Shortcut - Firefox Extension

A Firefox browser extension that allows you to duplicate the currently active tab using keyboard shortcuts.

> Note: This extension generated and managed by AI

## Features

- **Keyboard Shortcuts**: 
  - **Mac**: `Command+Shift+D`
  - **Windows/Linux**: `Ctrl+Shift+D`
- **Cross-platform support**: Works on macOS, Windows, and Linux
- **Prevents default behavior**: The extension prevents the default browser behavior for these shortcuts
- **Simple and lightweight**: No unnecessary permissions or features

## Installation

### Method 1: Temporary Installation (for testing)

1. Open Firefox and navigate to `about:debugging`
2. Click on "This Firefox" in the left sidebar
3. Click "Load Temporary Add-on..."
4. Select the `manifest.json` file from this directory
5. The extension will be installed temporarily and will be removed when you restart Firefox

### Method 2: Permanent Installation

1. Open Firefox and navigate to `about:addons`
2. Click the gear icon and select "Install Add-on From File..."
3. Select the `manifest.json` file from this directory
4. The extension will be installed permanently

## Usage

1. Navigate to any webpage in Firefox
2. Press the keyboard shortcut:
   - **Mac**: `Command+Shift+D`
   - **Windows/Linux**: `Ctrl+Shift+D`
3. The current tab will be duplicated with the same URL

## Files Structure

```
duplicate-firefox-tab/
├── manifest.json      # Extension manifest file
├── background.js      # Background script for handling commands
├── content.js         # Content script for keyboard event handling
├── icon-48.png       # 48x48 icon (placeholder)
├── icon-96.png       # 96x96 icon (placeholder)
└── README.md         # This file
```

## How It Works

1. **Content Script** (`content.js`): Listens for keyboard events and prevents default behavior for the specified shortcuts
2. **Background Script** (`background.js`): Handles the actual tab duplication logic using Firefox's tabs API
3. **Manifest** (`manifest.json`): Defines the extension permissions, scripts, and keyboard shortcuts

## Permissions

- `tabs`: Required to duplicate tabs
- `activeTab`: Required to access the currently active tab

## Development

To modify the extension:

1. Edit the relevant files
2. Reload the extension in `about:debugging` (for temporary installation)
3. Or reinstall the extension (for permanent installation)

## Troubleshooting

- If the keyboard shortcut doesn't work, check that no other extension is using the same shortcut
- Make sure the extension is enabled in `about:addons`
- Check the browser console for any error messages

## Notes

- The extension uses Manifest V2 for maximum compatibility
- The extension works on all websites and prevents default browser behavior for the specified shortcuts

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. # duplicate-tab-firefox-shortcut
