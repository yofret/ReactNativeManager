//-------------------------------
// App Dependencies 
//-------------------------------

	import { Navigation } from 'react-native-navigation';
	import Loader from './components/Loader';
	import LoginForm from './components/LoginForm';
	import EmployeeList from './components/EmployeeList';
	import EmployeeCreate from './components/EmployeeCreate';

//-------------------------------
// RouterComponent Component
//-------------------------------

	export function registerScreens(store, Provider) {
		Navigation.registerComponent('manager.Loader', () => Loader, store, Provider);
		Navigation.registerComponent('manager.LoginForm', () => LoginForm, store, Provider);
		Navigation.registerComponent('manager.EmployeeList', () => EmployeeList, store, Provider);
		Navigation.registerComponent('manager.EmployeeCreate', () => EmployeeCreate, store, Provider);
	}
