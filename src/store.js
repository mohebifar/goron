import reducers from './reducers';
import {createStore} from 'redux';

let store = createStore(reducers);

export default store;