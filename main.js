const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    autoHideMenuBar: true, // Schová horní menu (File, Edit atd.)
    webPreferences: { nodeIntegration: false }
  })

  win.loadURL('https://cichnovabrno.papousek.eu/admin') // Zde změňte URL!
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
}) 
