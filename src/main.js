var app = require('app');
var dialog = require('dialog');
var Window = require('./utils/electron/window');
var cr = require('crash-reporter').start();
var config = require('./config');
require('crash-reporter').start();

var connectionsWindow = null;

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function () {
  connectionsWindow = new Window('connections');
  connectionsWindow.create();

  connectionsWindow.window.openDevTools();
  connectionsWindow.window.on('closed', function () {
    connectionsWindow = null;
  });
});
