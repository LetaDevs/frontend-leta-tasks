import React, {createContext, useContext, useEffect, useState} from 'react';
import {AuthContext} from './AuthContext';
import {useHistory} from 'react-router-dom';

export const ProyectosContext = createContext();

const ProyectosProvider = (props) => {
	const {jwt, currentUser} = useContext(AuthContext);

	const [nuevoproyecto, setNuevoProyecto] = useState({});
	const [refreshproyectos, setRefreshProyectos] = useState(false);
	const [proyectos, setProyectos] = useState([]);
	const [urlProyectoActual, setUrlProyectoActual] = useState('');
	const [proyectoActual, setProyectoActual] = useState({});
	const [refreshProyectoActual, setRefreshProyectoActual] = useState(false);
	const [editProyecto, setEditProyecto] = useState('');
	const [eliminarProyecto, setEliminarProyecto] = useState(false);

	const history = useHistory();

	useEffect(() => {
		if (Object.keys(nuevoproyecto).length === 0) return;

		const crearProyecto = async () => {
			const url = `${process.env.REACT_APP_BACKEND_URL}/api/v1/proyectos/crear-proyecto`;
			const consulta = await fetch(url, {
				method: 'POST',
				body: JSON.stringify(nuevoproyecto),
				headers: {'Content-Type': 'application/json', 'x-auth-token': jwt},
			});
			const resp = await consulta.json();
			if (resp.code === 201) {
				setRefreshProyectos((state) => !state);
			}
		};
		crearProyecto();
	}, [nuevoproyecto]);

	useEffect(() => {
		const obtenerProyectos = async () => {
			const url = `${process.env.REACT_APP_BACKEND_URL}/api/v1/proyectos/obtener-proyectos/${currentUser.id}`;

			const consulta = await fetch(url, {headers: {'x-auth-token': jwt}});
			const resp = await consulta.json();
			setProyectos(resp);
		};
		obtenerProyectos();
	}, [refreshproyectos, jwt, currentUser]);

	useEffect(() => {
		if (urlProyectoActual === '') return;

		const obtenerProyectoActual = async () => {
			const url = `${process.env.REACT_APP_BACKEND_URL}/api/v1/proyectos/obtener-proyecto/${urlProyectoActual}`;
			const consulta = await fetch(url, {headers: {'x-auth-token': jwt}});
			const resp = await consulta.json();
			if (resp.code === 200) {
				setProyectoActual(resp.proyecto);
			}
		};
		obtenerProyectoActual();
	}, [urlProyectoActual, refreshProyectoActual]);

	useEffect(() => {
		if (editProyecto === '') return;

		const editarProyecto = async () => {
			const url = `${process.env.REACT_APP_BACKEND_URL}/api/v1/proyectos/editar-proyecto/${proyectoActual._id}`;
			const consulta = await fetch(url, {
				method: 'PUT',
				body: JSON.stringify({titulo: editProyecto}),
				headers: {'Content-Type': 'application/json', 'x-auth-token': jwt},
			});
			const resp = await consulta.json();
			if (resp.code === 200) {
				setRefreshProyectos(true);
				setRefreshProyectoActual((state) => !state);
			}
		};
		editarProyecto();
	}, [editProyecto]);

	useEffect(() => {
		if (!eliminarProyecto) return;

		const deleteProyecto = async () => {
			const url = `${process.env.REACT_APP_BACKEND_URL}/api/v1/proyectos/eliminar-proyecto/${proyectoActual._id}`;
			const consulta = await fetch(url, {method: 'DELETE', headers: {'x-auth-token': jwt}});
			const resp = await consulta.json();
			if (resp.code === 200) {
				setRefreshProyectos(true);
				setProyectoActual({});
				history.push('/dashboard');
			}
		};
		deleteProyecto();
	}, [eliminarProyecto]);

	return (
		<ProyectosContext.Provider
			value={{
				proyectos,
				proyectoActual,
				refreshproyectos,
				setNuevoProyecto,
				setUrlProyectoActual,
				setEditProyecto,
				setEliminarProyecto,
			}}>
			{props.children}
		</ProyectosContext.Provider>
	);
};

export default ProyectosProvider;
