const { dialog } = require("electron");
const fs = require("fs");

async function openSaveDialog(win, options) {
    const result = await dialog.showSaveDialog({
        title: options.title,
        defaultPath: options.defaultPath
    });

    if (result.canceled) return null;

    await fs.writeFileSync(result.filePath, options.content);

    await dialog.showMessageBox(win, {
        title: "Keep !t",
        message: "Note Saved."
    });

    return result.filePath;
}

module.exports = {
    openSaveDialog
}