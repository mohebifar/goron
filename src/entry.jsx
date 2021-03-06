import React from 'react';
import ipc from 'ipc';
import { Provider } from 'react-redux';
import store from './store';
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

ipc.on('window-ready', (app) => {
  const path = `./components/${app}/index.jsx`;
  const Component = require(path);
  React.render(<Provider store={store}>{()=><Component />}</Provider>, document.getElementById('content'));
});