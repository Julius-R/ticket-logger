import React, { Component } from 'react';

export default class Logger extends Component {
	render() {
		return (
			<div>
				Logger <button onClick={this.props.openModal}> Open</button>
			</div>
		);
	}
}
