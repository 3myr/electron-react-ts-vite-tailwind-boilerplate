import { contextBridge, ipcRenderer } from "electron";

export const api = {
  getVersion: () => ipcRenderer.sendSync("app/version"),
  maximize: () => ipcRenderer.send("app/maximize"),
  minimize: () => ipcRenderer.send("app/minimize"),
  close: () => ipcRenderer.send("app/close"),
};

contextBridge.exposeInMainWorld("electron", api);
