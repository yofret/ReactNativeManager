//-------------------------------
// App Dependencies 
//-------------------------------

	import React from 'react';
	import { Scene, Router } from 'react-native-router-flux';
	import LoginForm from './components/LoginForm';

//-------------------------------
// RouterComponent Component
//-------------------------------

	const RouterComponent = (props) => {

		return (
			<Router sceneStyle={{ paddingTop: 65 }}>
				<Scene key='login' component={LoginForm} title='Please Login' />
			</Router>
		);
	};

//-------------------------------
// Export RouterComponent Component
//-------------------------------
	export default RouterComponent;