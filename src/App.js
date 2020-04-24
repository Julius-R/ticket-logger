import React, { Component } from 'react';
import Logger from './Components/Logger';
import Logs from './Components/Logs';

export default class App extends Component {
	state = {
		logs: [
			{
				issueName: 'Broke machine',
				issueDetails:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odit error fugiat ab?',
				importanceLevel: 'medium',
				inProgress: false,
				dateReported: 'Jan 5, 2020',
			},
		],
	};
	render() {
		return (
			<>
				<Logger />
				<Logs logs={this.state.logs} />
			</>
		);
	}
}
