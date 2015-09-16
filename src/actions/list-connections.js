import { LIST_CONNECTIONS, LOAD_CONNECTIONS } from './types';

export function loadConnections() {
  return {
    type: LOAD_CONNECTIONS
  };
}

export function listConnections(connections) {
  return {
    type: LIST_CONNECTIONS,
    connections
  };
}