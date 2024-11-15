"use strict";
require("@electron-toolkit/utils");
const electron = require("electron");
const node_path = require("node:path");
function createWindow() {
  const win = new electron.BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    autoHideMenuBar: true,
    ...process.platform === "linux" ? { icon } : {},
    webPreferences: {
      preload: node_path.join(__dirname, "preload.js"),
      sandbox: false
    }
  });
  win.on("ready-to-show", () => {
    win.show();
  });
}
electron.app.whenReady().then(() => {
  createWindow();
  electron.app.on("activate", () => {
    if (electron.BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    electron.app.quit();
  }
});
