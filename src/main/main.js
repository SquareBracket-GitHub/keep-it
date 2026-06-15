const { app, BrowserWindow, screen, ipcMain, dialog } = require('electron');
const { readFileSync } = require('fs');
const path = require('path');

const { openSaveDialog } = require("./modules/open-save-dialog");

let mainWindow;
const devTest = true;

function createWindow() {
  const { width: scrWidth, height: scrHeight } = screen.getPrimaryDisplay().workAreaSize;

  const winWidth = 350;
  const winHeight = 450;

  mainWindow = new BrowserWindow({
    width: winWidth,
    height: winHeight,
    x: scrWidth - winWidth - 20,
    y: scrHeight - winHeight - 20,

    frame: false,
    transparent: true,
    hasShadow: true,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    },
    icon: path.join(__dirname, 'assets/icon.ico')
  });

  mainWindow.loadFile('src/web/index.html');

  if (devTest) {
    mainWindow.webContents.openDevTools({ mode: 'detach' });

    mainWindow.webContents.setWindowOpenHandler(() => {
      return { action: 'allow' };
    });
  }

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

ipcMain.handle('open-save-dialog', async (_, options) => {
  await openSaveDialog(mainWindow, options);
});

ipcMain.handle('read-settings', async () => {
  const result = await readFileSync();
  console.log(result);
});