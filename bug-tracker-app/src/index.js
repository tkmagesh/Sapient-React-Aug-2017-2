import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';

import appStore from './store';
import BugTracker from './BugTracker/BugTracker';



ReactDOM.render(
	<Provider store={appStore}>
		<BugTracker />
	</Provider>, document.getElementById('root'));

