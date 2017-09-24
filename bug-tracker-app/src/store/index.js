import { createStore, combineReducers } from 'redux';
import { bugsReducer, counterReducer } from '../reducers';

let allReducers = combineReducers({
	bugs : bugsReducer,
	counter : counterReducer
});

let appStore = createStore(allReducers);

export default appStore;