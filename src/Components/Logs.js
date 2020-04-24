import React from 'react';
import Log from './Log';

// * TODO - Add state to manage creating new logs, import moment.js for time,

export default function Logs(props) {
	return (
		<section className="log-area">
			<h1>Error Logs</h1>
			<ul>
				{props.logs.map((log) => (
					<Log
						log={log}
						key={log.id}
						handleDelete={props.handleDelete}
					/>
				))}
			</ul>
		</section>
	);
}
