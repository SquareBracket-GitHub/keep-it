const fs = require("fs");

async function readSettings() {
    const file = await JSON.parse(fs.readFileSync('./config/settings.json'));

    return file;
}

module.exports = {
    readSettings
}