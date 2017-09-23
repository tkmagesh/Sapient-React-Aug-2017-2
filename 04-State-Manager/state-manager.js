
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
	return {
		createStore : createStore
	}
})();
