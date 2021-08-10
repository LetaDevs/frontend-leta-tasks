import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AuthContext} from '../../contexts/AuthContext';

const RutaProtegida = ({component: Componente, ...props}) => {
	const {autenticado, cargando} = useContext(AuthContext);

	return (
		<Route
			{...props}
			render={(props) => (!autenticado && !cargando ? <Redirect to='/log-in' /> : <Componente {...props} />)}
		/>
	);
};

export default RutaProtegida;
