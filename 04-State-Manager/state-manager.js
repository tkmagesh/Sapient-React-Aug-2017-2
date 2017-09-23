
var SM = (function(){
	function createStore(reducer){
		let init_action = { type : '@@INIT_ACTION' };
		let currentState = reducer(undefined, init_action);

		function dispatch(action){
			let newState = reducer(currentState, action);
			if (newState === currentState) return;
			currentState = newState;
			triggerChange();
		}
		let subscriptions = [];

		function triggerChange(){
			subscriptions.forEach(subscription => subscription());
		}

		function subscribe(subscription){
			if (typeof subscription === 'function')
				subscriptions.push(subscription);
		}

		function getState(){
			return currentState;
		}
		return {
			getState : getState,
			dispatch : dispatch,
			subscribe : subscribe
		}
	}
	function bindActionCreators(actionCreators, dispatch){
		var result = {};
		for(let key in actionCreators){
			result[key] = function(){
				dispatch(actionCreators[key].apply(undefined, arguments));
			}
		}
		return result;
	}
	return {
		createStore : createStore,
		bindActionCreators : bindActionCreators
	}
})();
