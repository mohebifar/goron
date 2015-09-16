const app = require('app');
const ConnectionsWindow = require('./windows/connections');
const cr = require('crash-reporter').start();
const ipc = require('ipc');

require('crash-reporter').start();

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  const connectionsWindow = new ConnectionsWindow();
  connectionsWindow.create();
  connectionsWindow.window.openDevTools();
});