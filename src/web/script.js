// const { remote } = require('electron');
const { getCurrentDate } = require('./modules/date');
const { saveFile } = require('./modules/save');

const today = getCurrentDate();
document.getElementById('title').textContent = `Keep !t - ${today}`;

setInterval(() => {
    const today = getCurrentDate();
    document.getElementById('title').textContent = `Keep !t - ${today}`;
}, 1000);

// document.getElementById('dateDisplay').textContent = `Today's date: ${getCurrentDate()}`;

document.getElementById('closeBtn').addEventListener('click', () => {
    window.close();
});

document.getElementById('saveBtn').addEventListener('click', async () => {
    const content = document.querySelector('.content-area').value;
    const filename = `keepit_${getCurrentDate().replace(/[: ]/g, '_')}`;

    saveFile(filename, content);
});