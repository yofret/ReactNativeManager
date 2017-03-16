//-------------------------------
// LoginForm Dependencies 
//-------------------------------

	import React, { Component } from 'react';
	import { Text } from 'react-native'
	import { connect } from 'react-redux';
	import { 
		emailChanged, 
		passwordChanged, 
		loginUser 
	} from '../actions'
	import { Card, CardSection, Input, Button } from './common';

//-------------------------------
// LoginForm Component
//-------------------------------

	class LoginForm extends Component {
		//State
		state = {}

		//Life cycle methods
		componentWillMount() {}

		componentDidMount() {}

		componentWillReceiveProps(nextProps) {}

		componentWillUpdate(nextProps, nextState) {}

		componentDidUpdate(prevProps, prevState) {}

		//Methods
		onEmailChange(text) {
			this.props.emailChanged(text);
		}

		onPasswordChange(text) {
			this.props.passwordChanged(text);
		}

		onButtonPress(){
			const { email, password } = this.props;
			this.props.loginUser({ email, password });
		}		

		// Render methods
		render() {
			return (
				<Card>
					<CardSection>
						<Input
							label="Email"
							placeholder="email@gmail.com"
							onChangeText={this.onEmailChange.bind(this)}
							value={this.props.email}
						/>
					</CardSection>

					<CardSection>
						<Input
							secureTextEntry
							label="Password"
							placeholder="password"
							onChangeText={this.onPasswordChange.bind(this)}
						/>
					</CardSection>

					<Text style={styles.errorTextStyle}>
						{this.props.error}
					</Text>

					<CardSection>
						<Button onPress={this.onButtonPress.bind(this)}>
							Login
						</Button>
					</CardSection>
				</Card>
			);
		}					
	}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
}

//-------------------------------
// MapState to props
//-------------------------------

	const mapStateToProps = ({ auth }) => {
		const { email, password, error} = auth;

		return { email, password, error };
	};

//-------------------------------
// Export Component
//-------------------------------

	export default connect(mapStateToProps, { 
		emailChanged, passwordChanged, loginUser 
	})(LoginForm);

