import React from 'react';
import 'animate.css';

const Alert = ({categoria, msg}) => {
	return (
		<div
			className={`alert alert--${categoria} animate__animated ${
				categoria === 'success' ? 'animate__fadeInDown' : 'animate__headShake'
			}`}>
			<p className='alert__msg'>{msg}</p>
		</div>
	);
};

export default Alert;
