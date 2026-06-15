const { getCurrentDate, displayTime } = require('./modules/date');
const { saveFile } = require('./modules/save');
const { readSettings } = require('./modules/setting');

displayTime(document);

document.getElementById('closeBtn').addEventListener('click', () => {
    window.close();
});

document.getElementById('saveBtn').addEventListener('click', async () => {
    const content = document.querySelector('.content-area').value;
    const filename = `keepit_${getCurrentDate().replace(/[: ]/g, '_')}`;

    content = await readSettings();

    saveFile(filename, content);
});