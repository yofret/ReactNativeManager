//-------------------------------
// App Dependencies 
//-------------------------------

	import React, { Component } from 'react';
	import { View } from 'react-native';
	import firebase from 'firebase';
	import { Spinner } from './common';

//-------------------------------
// Loader Component 
//-------------------------------

	class Loader extends Component {
		constructor(props) {
			super(props);

			this.state = {};
			this.props.navigator.toggleNavBar({
				to: 'hidden', 
				animated: true 
			});
		}

		componentWillMount() {
			firebase.auth().onAuthStateChanged((user) => {
				if(user) {
					this.props.navigator.push({
						title: "Employees",
						screen: "manager.EmployeeList"
					});
				} else {
					this.props.navigator.push({
						title: "Login",
						screen: "manager.LoginForm"
					});
				}
			});
		}	

		render() {
			return (
				<View style={styles.spinnerContainer}>
					<Spinner size='large' />
				</View>
			);
		};
	}

	const styles = {
		spinnerContainer: {
			flex: 1
		}
	}

//-------------------------------
// Export Loader Component 
//-------------------------------

	export default Loader;