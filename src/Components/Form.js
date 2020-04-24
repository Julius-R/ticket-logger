import React, { Component } from 'react';

const FormArea = (props) => {
	return <section className="form-area"></section>;
};

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			details: '',
			level: '',
		};
		this.createLog = this.createLog.bind(this);
	}

	createLog(e) {
		e.preventDefault();
		console.log('Works');
		// let time = undefined;
		// let id = undefined;
		// let progress = undefined;
		// let log = {
		// 	id: id,
		// 	issueName: this.state.name,
		// 	issueDetails: this.state.details,
		// 	importanceLevel: this.state.level,
		// 	inProgress: progress,
		// 	dateReported: time,
		// };

		// this.props.handleCreateNewLog(log);
	}
	render() {
		return (
			<form onSubmit={this.createLog}>
				<button>Create Log</button>
			</form>
		);
	}
}
