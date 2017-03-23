//-------------------------------
// App Dependencies 
//-------------------------------

	import { Navigation } from 'react-native-navigation';
	import { Provider } from 'react-redux';
	import { createStore, applyMiddleware } from 'redux';
	import ReduxThunk from 'redux-thunk';
	import firebase from 'firebase';
	import reducers from './reducers';
	import { registerScreens } from './Screens';

	const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

	registerScreens(store, Provider);

	const navigatorStyle = {
		statusBarColor: 'black',
		statusBarTextColorScheme: 'light',
		navigationBarColor: 'black',
		navBarBackgroundColor: '#0a0a0a',
		navBarTextColor: 'white',
		navBarButtonColor: 'white',
		tabBarButtonColor: 'red',
		tabBarSelectedButtonColor: 'red',
		tabBarBackgroundColor: 'white'
	};

	const config = {
		apiKey: 'AIzaSyChPko5hStWUj-WolROcG50jsjfaHu5FKY',
		authDomain: 'manager-cc5da.firebaseapp.com',
		databaseURL: 'https://manager-cc5da.firebaseio.com',
		storageBucket: 'manager-cc5da.appspot.com',
		messagingSenderId: '739200810786'
	};

	firebase.initializeApp(config);

	Navigation.startSingleScreenApp({
		screen: {
			screen: 'manager.Loader',
			title: 'Loader',
			navigatorStyle
		}
	});
