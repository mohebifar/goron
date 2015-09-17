import { SELECT_CONNECTION } from './../actions/types';
import store from './../store.js';
import ipc from 'ipc';

export default function (state, action) {
  if (typeof state === 'undefined') {
    state = {};
  }

  if (action.type === SELECT_CONNECTION) {
    ipc.once('window-opened', function () {
      window.close();
    });

    ipc.send('open-window', 'main');

    return action.connection;
  }

  return state;
}