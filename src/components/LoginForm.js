//-------------------------------
// LoginForm Dependencies 
//-------------------------------

	import React, { Component } from 'react';
	import { connect } from 'react-redux';
	import { emailChanged, passwordChanged } from '../actions'
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

					<CardSection>
						<Button>
							Login
						</Button>
					</CardSection>
				</Card>
			);
		}					
	}

//-------------------------------
// MapState to props
//-------------------------------

	const mapStateToProps = state => {
		const { email, password} = state.auth
		return {
			email: email,
			password: password
		}
	};

//-------------------------------
// Export Component
//-------------------------------

	export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);

