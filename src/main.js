var app = require('app');
var ConnectionsWindow = require('./windows/new-connection');
var cr = require('crash-reporter').start();
var ipc = require('ipc');

require('crash-reporter').start();

var newConnectionsWindow = null;

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function () {
  newConnectionsWindow = new ConnectionsWindow('');
  newConnectionsWindow.create();
  newConnectionsWindow.window.openDevTools();
});