//-------------------------------
// App Dependencies 
//-------------------------------

	import React from 'react';
	import { Scene, Router } from 'react-native-router-flux';
	import LoginForm from './components/LoginForm';
	import EmployeeList from './components/EmployeeList'

//-------------------------------
// RouterComponent Component
//-------------------------------

	const RouterComponent = (props) => {

		return (
			<Router sceneStyle={{ paddingTop: 65 }}>
				<Scene key='auth'>
					<Scene key='login' component={LoginForm} title='Please Login' />
				</Scene>

				<Scene key='main'>
					<Scene 
						key='employeeList' 
						component={EmployeeList} 
						title='Employees'
						rightTitle='Add' 
						onRight={() => console.log('onRight')}/>
				</Scene>
			</Router>
		);
	};

//-------------------------------
// Export RouterComponent Component
//-------------------------------
	export default RouterComponent;