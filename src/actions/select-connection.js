import { SELECT_CONNECTION } from './types';

export function selectConnection(connection) {
  return {
    type: SELECT_CONNECTION,
    connection
  };
}