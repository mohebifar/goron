const app = require('app');
const ConnectionsWindow = require('./windows/new-connection');
const cr = require('crash-reporter').start();
const ipc = require('ipc');

require('crash-reporter').start();

let newConnectionsWindow = null;

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  newConnectionsWindow = new ConnectionsWindow('');
  newConnectionsWindow.create();
  newConnectionsWindow.window.openDevTools();
});