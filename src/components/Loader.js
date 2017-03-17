//-------------------------------
// App Dependencies 
//-------------------------------

	import React, { Component } from 'react';
	import { View } from 'react-native';
	import { Actions } from 'react-native-router-flux';
	import firebase from 'firebase';
	import { Spinner } from './common';

//-------------------------------
// Loader Component 
//-------------------------------

	class Loader extends Component {
		//State
		state = {
			isLogged: null
		}

		componentWillMount() {
			firebase.auth().onAuthStateChanged((user) => {
				if(user) {
					Actions.main();
				} else {
					Actions.login();
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