//-------------------------------
// App Dependencies 
//-------------------------------

	import React, { Component } from 'react';
	import { Provider } from 'react-redux';
	import { createStore, applyMiddleware } from 'redux';
	import ReduxThunk from 'redux-thunk';
	import firebase from 'firebase';
	import reducers from './reducers';
	import LoginFrom from './components/LoginForm';


//-------------------------------
// App Class Component 
//-------------------------------
	
	class App extends Component {

		componentWillMount() {
			const config = {
				apiKey: 'AIzaSyChPko5hStWUj-WolROcG50jsjfaHu5FKY',
				authDomain: 'manager-cc5da.firebaseapp.com',
				databaseURL: 'https://manager-cc5da.firebaseio.com',
				storageBucket: 'manager-cc5da.appspot.com',
				messagingSenderId: '739200810786'
			};

			firebase.initializeApp(config);
		}			

		render() {
			const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

			return (
				<Provider store={store}>
					<LoginFrom />
				</Provider>
			);
		}
	}

//-------------------------------
// Export Class Component 
//-------------------------------

	export default App