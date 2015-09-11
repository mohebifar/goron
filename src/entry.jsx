import React from 'react';
import ipc from 'ipc';
import { Provider } from 'react-redux';
import store from './store';

ipc.on('app', (app) => {
  const path = `./windows/${app}.jsx`;
  const Window = require(path);
  React.render(<Provider store={store}>{()=><Window />}</Provider>, document.getElementById('content'));
});