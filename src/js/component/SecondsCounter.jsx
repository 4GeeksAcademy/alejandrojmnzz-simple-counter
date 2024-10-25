import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'


const SecondsCounter = (props) => {
	const { one, two, three, four, five, six } = SecondsCounter
	return (
		<div className="d-flex justify-content-center">

			<div className="d-flex flex-row-reverse justify-content-center bg-black text-white counterSize py-2">
				
				<div className="px-3 numberBg rounded border-start border-end border-secondary ms-2 numberSize">
					<h1>{props.one % 10}</h1>
				</div>
				<div className="px-3 numberBg rounded border-start border-end border-secondary ms-2 numberSize">
					<h1>{props.two % 10}</h1>
				</div>
				<div className="px-3 numberBg rounded border-start border-end border-secondary ms-2 numberSize">
					<h1>{props.three % 10}</h1>
				</div>
				<div className="px-3 numberBg rounded border-start border-end border-secondary ms-2 numberSize">
					<h1>{props.four % 10}</h1>
				</div>
				<div className="px-3 numberBg rounded border-start border-end border-secondary ms-2 numberSize">
					<h1>{props.five % 10}</h1>
				</div>
				<div className="px-3 numberBg rounded border-start border-end border-secondary ms-2 numberSize">
					<h1>{props.six % 10}</h1>
				</div>
				<div className="px-3 numberBg rounded border-start border-end border-secondary">
					<h1><FontAwesomeIcon icon={faClock} /></h1>
				</div>
			</div>
		</div>
	);
};

export default SecondsCounter;
