import React, { Component } from 'react';
import Form from './Components/Form';
import Logger from './Components/Logger';
import Logs from './Components/Logs';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalOpen: false,
			logs: [
				{
					id: 23423,
					issueName: 'Broke machine',
					issueDetails:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odit error fugiat ab?',
					importanceLevel: 'medium',
					inProgress: false,
					dateReported: 'Jan 5, 2020',
				},
				{
					id: 63463453,
					issueName: 'Bad machine',
					issueDetails:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odit error fugiat ab?',
					importanceLevel: 'High',
					inProgress: false,
					dateReported: 'Jan 5, 2020',
				},
			],
		};

		this.handleDelete = this.handleDelete.bind(this);
		this.handleCreateNewLog = this.handleCreateNewLog.bind(this);
	}

	handleDelete(e) {
		console.log(e);
		let filter = this.state.logs.filter((log) => {
			if (log.id !== e) {
				return true;
			}
		});
		this.setState({
			logs: filter,
		});
	}

	render() {
		return (
			<>
				<Logger />
				<Logs logs={this.state.logs} handleDelete={this.handleDelete} />
				<Form handleCreateNewLog={this.handleCreateNewLog} />
			</>
		);
	}
}
