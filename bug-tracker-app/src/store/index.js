import { createStore, combineReducers, applyMiddleware } from 'redux';
import { bugsReducer, counterReducer, statusReducer } from '../reducers';
import thunk from 'redux-thunk';

let allReducers = combineReducers({
	bugs : bugsReducer,
	counter : counterReducer,
	status : statusReducer
});

let appStore = createStore(allReducers, applyMiddleware(thunk));

export default appStore;