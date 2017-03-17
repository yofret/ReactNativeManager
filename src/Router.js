//-------------------------------
// App Dependencies 
//-------------------------------

	import React from 'react';
	import { Scene, Router, Actions } from 'react-native-router-flux';
	import Loader from './components/Loader';
	import LoginForm from './components/LoginForm';
	import EmployeeList from './components/EmployeeList';
	import EmployeeCreate from './components/EmployeeCreate';

//-------------------------------
// RouterComponent Component
//-------------------------------

	const RouterComponent = (props) => {

		return (
			<Router sceneStyle={{ paddingTop: 65 }}>
				<Scene key='auth'>
					<Scene key='loader' component={Loader} hideNavBar={true} initial/>
					<Scene key='login' component={LoginForm} title='Please Login' />
				</Scene>

				<Scene key='main'>
					<Scene 
						key='employeeList' 
						component={EmployeeList} 
						title='Employees'
						rightTitle='Add' 
						onRight={() => Actions.employeeCreate()}
						initial 
					/>
					<Scene 
						key='employeeCreate'
						component={EmployeeCreate}
						title='Create Employee'
					/>
				</Scene>
			</Router>
		);
	};

//-------------------------------
// Export RouterComponent Component
//-------------------------------

	export default RouterComponent;
