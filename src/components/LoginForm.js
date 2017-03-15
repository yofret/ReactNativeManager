//-------------------------------
// LoginForm Dependencies 
//-------------------------------

	import React, { Component } from 'react';
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

		// Render methods
		render() {
			return (
				<Card>
					<CardSection>
						<Input
							labler="Email"
							placeholder="email@gmail.com"
						/>
					</CardSection>

					<CardSection>
						<Input
							secureTextEntry
							labler="Password"
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
// Export Component
//-------------------------------

	export default LoginForm;