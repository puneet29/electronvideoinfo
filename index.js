const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');

const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.loadURL(`file://${__dirname}/index.html`);
});

// Get the duration of the video sent by renderer app

ipcMain.on('video:submit', (event, path) => {
    ffmpeg.ffprobe(path, (err, metadata) => {
        // Send the duration to renderer app
        mainWindow.webContents.send('video:fetchDuration',metadata.format.duration);
    });
});