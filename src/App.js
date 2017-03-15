//-------------------------------
// App Dependencies 
//-------------------------------

	import React, { Component } from 'react';
	import { View, Text } from 'react-native';
	import { Provider } from 'react-redux';
	import { createStore } from 'redux';
	import firebase from 'firebase';
	import reducers from './reducers';


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
			return (
				<Provider store={createStore(reducers)}>
					<View>
						<Text>Hello!!</Text>
					</View>
				</Provider>
			);
		}
	}

//-------------------------------
// Export Class Component 
//-------------------------------

	export default App