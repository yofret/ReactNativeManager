//-------------------------------
// LoginForm Dependencies 
//-------------------------------

	import React, { Component } from 'react';
	import { connect } from 'react-redux';
	import { emailChanged } from '../actions'
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
		return {
			email: state.auth.email
		}
	};

//-------------------------------
// Export Component
//-------------------------------

	export default connect(mapStateToProps, { emailChanged })(LoginForm);

