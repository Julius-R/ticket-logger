import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
/*
 * Todos -  Add way to mark completed

*/
export default function Log(props) {
	return (
		<li className="issue">
			<h2 className="issue__name">{props.log.issueName}</h2>
			<p className="issue__details">{props.log.issueDetails}</p>

			<FaRegTrashAlt
				className="del"
				onClick={(e) => props.handleDelete(props.log.id)}
			/>

			<ul className="issue__track">
				<li className="issue__track__importance">
					Importance:{' '}
					<span className="issue__track__importance__color">
						{props.log.importanceLevel}
					</span>
				</li>
				<li className="issue__track__progress">
					Status:{' '}
					{props.log.inProgress ? 'Completed' : 'In progress...'}
				</li>
				<li className="issue__track__date">
					Ticket Created: {props.log.dateReported}
				</li>
			</ul>
		</li>
	);
}
