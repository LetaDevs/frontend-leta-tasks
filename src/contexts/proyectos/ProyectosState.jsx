import React, {useReducer} from 'react';

import proyectosContext from './proyectosContext';
import proyectosReducer from './proyectosReducer';

import {OBTENER_PROYECTOS, PROYECTO_ACTUAL, EDITAR_PROYECTO, ELIMINAR_PROYECTO} from '../../types';

const ProyectosState = (props) => {
	const initialState = {
		proyectos: [],
		proyecto: {},
		editar: false,
	};

	const baseUrl = process.env.REACT_APP_BACKEND_URL;

	const [state, dispatch] = useReducer(proyectosReducer, initialState);

	const obtenerProyectos = async (userId, jwt) => {
		const url = `${baseUrl}/api/v1/proyectos/obtener-proyectos/${userId}`;
		try {
			const datos = await fetch(url, {headers: {'x-auth-token': jwt}}).then((data) => data.json());

			dispatch({
				type: OBTENER_PROYECTOS,
				payload: datos,
			});
		} catch (error) {
			console.log(error);
		}
	};

	const agregarProyecto = async (proyecto, jwt) => {
		const url = `${baseUrl}/api/v1/proyectos/crear-proyecto`;
		try {
			await fetch(url, {
				method: 'POST',
				body: JSON.stringify(proyecto),
				headers: {'Content-Type': 'application/json', 'x-auth-token': jwt},
			});
		} catch (error) {
			console.log(error);
		}
	};

	const proyectoActual = async (projectUrl, jwt) => {
		const url = `${baseUrl}/api/v1/proyectos/obtener-proyecto/${projectUrl}`;

		try {
			const datos = await fetch(url, {headers: {'x-auth-token': jwt}}).then((resp) => resp.json());

			dispatch({
				type: PROYECTO_ACTUAL,
				payload: datos.proyecto,
			});
		} catch (error) {
			console.log(error);
		}
	};

	const editarProyecto = (value) => {
		dispatch({
			type: EDITAR_PROYECTO,
			payload: value,
		});
	};

	const actualizarProyecto = async (proyecto, jwt, proyectoId) => {
		const url = `${baseUrl}/api/v1/proyectos/editar-proyecto/${proyectoId}`;
		try {
			await fetch(url, {
				method: 'PUT',
				body: JSON.stringify(proyecto),
				headers: {'Content-Type': 'application/json', 'x-auth-token': jwt},
			});
		} catch (error) {
			console.log(error);
		}
	};

	const eliminarProyecto = async (proyectoId, jwt) => {
		const url = `${baseUrl}/api/v1/proyectos/eliminar-proyecto/${proyectoId}`;
		try {
			await fetch(url, {method: 'DELETE', headers: {'x-auth-token': jwt}});
			dispatch({
				type: ELIMINAR_PROYECTO,
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<proyectosContext.Provider
				value={{
					proyectos: state.proyectos,
					proyecto: state.proyecto,
					editar: state.editar,
					obtenerProyectos,
					agregarProyecto,
					proyectoActual,
					editarProyecto,
					actualizarProyecto,
					eliminarProyecto,
				}}>
				{props.children}
			</proyectosContext.Provider>
		</>
	);
};

export default ProyectosState;
