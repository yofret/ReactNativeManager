//-------------------------------
// App Dependencies 
//-------------------------------

	import React, { Component } from 'react';
	import { Card, CardSection, Input, Button } from './common';

//-------------------------------
// EmployeeCreate Component 
//-------------------------------

	class EmployeeCreate extends Component {
		render() {
			return (
				<Card>
					<CardSection>
						<Input
							label='Name'
							placeholder='Dan'
						/>
					</CardSection>

					<CardSection>
						<Input
							label='Phone'
							placeholder='555-555-5555'
						/>
					</CardSection>

					<CardSection>
					</CardSection>

					<CardSection>
						<Button>
							Create
						</Button>
					</CardSection>
				</Card>
			);
		};
	}

//-------------------------------
// Export Component 
//-------------------------------

	export default EmployeeCreate;