# Publishing Guide - Firefox Add-ons

## Step-by-Step Guide to Publish Your Extension

### 1. **Prepare Your Extension**

Before publishing, make sure your extension is complete:

- ✅ All files are present (`manifest.json`, `background.js`, `content.js`, `icon.svg`)
- ✅ Extension works correctly when tested locally
- ✅ No console errors
- ✅ Proper permissions (only what's needed)

### 2. **Create a Developer Account**

1. Go to [addons.mozilla.org](https://addons.mozilla.org)
2. Click "Sign In" in the top right
3. Create a new account or sign in with an existing one
4. Complete your developer profile

### 3. **Submit Your Extension**

1. **Go to Developer Hub**
   - Visit [addons.mozilla.org/developers](https://addons.mozilla.org/developers)
   - Click "Submit a New Add-on"

2. **Upload Your Extension**
   - Choose "On this site" (recommended for most extensions)
   - Upload your `manifest.json` file or create a ZIP file containing all your extension files

3. **Fill Out Submission Form**
   - **Name**: "Duplicate Tab Shortcut"
   - **Summary**: "Duplicate the currently active tab using keyboard shortcuts"
   - **Description**: Use the content from your README.md
   - **Category**: "Productivity"
   - **Tags**: "tab", "duplicate", "keyboard", "shortcut"

4. **Add Screenshots/Images**
   - Upload screenshots showing the extension in action
   - Add a promotional image (optional but recommended)

### 4. **Review Process**

After submission:
- Mozilla will review your extension (usually 1-3 days)
- They'll check for security issues, proper permissions, etc.
- You may receive feedback to address

### 5. **Publication**

Once approved:
- Your extension will be available on addons.mozilla.org
- Users can install it directly from Firefox
- You can update it anytime through the developer dashboard

## Important Notes

### **Free Publishing**
- ✅ **Completely free** - no fees to publish
- ✅ **No developer account fees**
- ✅ **No listing fees**
- ✅ **No revenue sharing**

### **Requirements**
- Extension must work correctly
- Follow Mozilla's [Add-on Policies](https://extensionworkshop.com/documentation/publish/add-on-policies/)
- Use only necessary permissions
- No malicious code

### **Best Practices**
1. **Test thoroughly** before submitting
2. **Write clear descriptions** and documentation
3. **Provide screenshots** showing the extension in use
4. **Respond to user feedback** and reviews
5. **Keep your extension updated**

### **Alternative: Self-Hosting**
If you prefer not to use AMO, you can:
- Host the extension files on your own website
- Users can install it by downloading the files
- Less discoverable but gives you full control

## File Structure for Publishing

```
duplicate-firefox-tab/
├── manifest.json      # Extension configuration
├── background.js      # Background script
├── content.js         # Content script
├── icon.svg          # Extension icon
├── README.md         # Documentation
├── package.json      # Project metadata
└── PUBLISHING.md     # This guide
```

## Next Steps

1. Test your extension thoroughly
2. Create screenshots showing it in action
3. Write a compelling description
4. Submit to AMO
5. Wait for review and approval
6. Start promoting your extension!

## Support

- [Firefox Add-ons Documentation](https://extensionworkshop.com/)
- [AMO Developer Hub](https://addons.mozilla.org/developers/)
- [Add-on Policies](https://extensionworkshop.com/documentation/publish/add-on-policies/) 