import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../contexts/AuthContext';

const Upbar = () => {
	const {currentUser} = useContext(AuthContext);

	return (
		<div className='upbar'>
			<Link to='/dashboard'>
				<h2 className='sidebar__logo'>
					LETA<span className='sidebar__logo-dos'>Tasks</span>
				</h2>
			</Link>
			<div className='upbar__user'>
				<p>hola, {currentUser.nombre}</p>
				<div className='upbar__user-photo'>
					<span>{currentUser?.nombre?.charAt(0).toUpperCase()}</span>
				</div>
			</div>
		</div>
	);
};

export default Upbar;
