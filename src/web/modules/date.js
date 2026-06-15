const moment = require('moment');

function getCurrentDate() {
    return moment().format('YYYY-MM-DD HH:mm:ss');
}

function displayTime(document) {
    const today = getCurrentDate();
    document.getElementById('title').textContent = `Keep !t - ${today}`;
    
    setInterval(() => {
        const today = getCurrentDate();
        document.getElementById('title').textContent = `Keep !t - ${today}`;
    }, 1000);
}

module.exports = {
    getCurrentDate,
    displayTime
};