import React from 'react';
import ipc from 'ipc';

ipc.on('app', (app) => {
  var path = `./windows/${app}.jsx`;
  var Window = require(path);
  React.render(<Window />, document.getElementById('content'));
});