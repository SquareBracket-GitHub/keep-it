const { getCurrentDate, displayTime } = require('./modules/date');
const { saveFile } = require('./modules/save');

displayTime(document);

document.getElementById('closeBtn').addEventListener('click', () => {
    window.close();
});

document.getElementById('saveBtn').addEventListener('click', async () => {
    const content = document.querySelector('.content-area').value;
    const filename = `keepit_${getCurrentDate().replace(/[: ]/g, '_')}`;

    saveFile(filename, content);
});