import { LIST_CONNECTIONS, LOAD_CONNECTIONS } from './../actions/types';
import { all as loadAll } from './../repository/connections.js';
import store from './../store.js';
import { listConnections } from './../actions/list-connections.js'

export default function (state, action) {
  if (typeof state === 'undefined') {
    state = [];
  }

  if (action.type === LIST_CONNECTIONS) {
    return action.connections;
  } else if (action.type === LOAD_CONNECTIONS) {
    loadAll((err, data) => {
      if (!err) {
        store.dispatch(listConnections(data));
      }
    });
    return state;
  }

  return state;
}