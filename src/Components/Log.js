import React from 'react';

export default function Log(props) {
	return (
		<li className="issue">
			<h2 className="issue__name">{props.log.issueName}</h2>
			<p className="issue__details">{props.log.issueDetails}</p>
			<p className="importance">
				Importance:{' '}
				<span className="issue__importance__color">
					{props.log.importanceLevel}
				</span>
			</p>
			<p className="issue__progress">
				{props.log.inProgress ? 'Completed' : 'In progress...'}
			</p>
			<p className="issue__date">{props.log.dateReported}</p>
		</li>
	);
}
