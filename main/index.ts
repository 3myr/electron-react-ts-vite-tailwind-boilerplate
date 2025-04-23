import {app, BrowserWindow, ipcMain} from "electron";
import serve from "electron-serve";
import path, {join} from "path";

import {getURL} from "./lib/getUrl";
import isDev from "./lib/isDev";

if (!isDev) {
    serve({directory: join(__dirname, "renderer"), hostname: "example"});
}

let win: BrowserWindow;

function createWindow() {
    win = new BrowserWindow({
        width: 1080,
        height: 624,
        minWidth: 800,
        minHeight: 600,
        titleBarStyle: "hidden",
        transparent: false, // transparent: true, //#Windowless
        backgroundColor: "#202020", //#Windowless
        resizable: true,
        icon: path.join(__dirname, "renderer", "icon.png"),
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            nodeIntegration: true,
            contextIsolation: true,
            webSecurity: false,
            allowRunningInsecureContent: true,
        },
    });

    win.on("enter-full-screen", () => {
        win.webContents.send("toggle-titlebar", false);
    });

    win.on("leave-full-screen", () => {
        win.webContents.send("toggle-titlebar", true);
    });

    const url = getURL("/");
    win.loadURL(url);
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on('before-quit', () => {
    // Terminer le processus du backend Java proprement
    ipcMain.removeAllListeners();
});

ipcMain.on("app/minimize", () => {
    win.isMinimized() ? win.restore() : win.minimize();
});

ipcMain.on("app/maximize", () => {
    if (!win.isMaximized()) {
        win.maximize();
    } else {
        win.unmaximize();
    }
});

ipcMain.on("app/close", () => {
    app.quit();
});
