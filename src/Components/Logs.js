import React from 'react';
import Log from './Log';

export default function Logs(props) {
	return (
		<section className="log-area">
			<h1>Error Logs</h1>
			<ul>
				{props.logs.map((log) => (
					<Log log={log} />
				))}
			</ul>
		</section>
	);
}
