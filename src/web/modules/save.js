const { ipcRenderer } = require('electron');

async function saveFile(title, content) {
    const result = await ipcRenderer.invoke('open-save-dialog', {
        title: title,
        defaultPath: `${title}.txt`,
        content: content
    });

    console.log(result);

    if (!result.canceled) {
        console.log(result.filePath);
    }
}

module.exports = {
    saveFile
}