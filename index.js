/*jshint esversion: 6 */

// Importing the dependencies
const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');

// Getting the properties from dependencies by destructuring
const { app, BrowserWindow, ipcMain } = electron;

// Defining main window
let mainWindow;

// Event handling: triggers when app is ready
app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.loadURL(`file://${__dirname}/index.html`); // load the HTML window
});

// Communication between index.html and index.js
// [2nd step of IPC]Get the duration of the video sent by renderer app

ipcMain.on('video:submit', (event, path) => {
    ffmpeg.ffprobe(path, (err, metadata) => {

        // [3rd step of IPC]Send the duration to renderer app
        mainWindow.webContents.send('video:fetchDuration', metadata.format.duration);

    });
});