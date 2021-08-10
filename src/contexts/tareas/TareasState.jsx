import React, {useReducer} from 'react';

import tareasContext from './tareasContext';
import tareasReducer from './tareasReducer';

import {OBTENER_TAREAS, EDITANDO_TAREA, TAREA_EDITAR, ACTUALIZAR_TAREA} from '../../types';

const TareasState = (props) => {
	const initialState = {
		tareas: [],
		editando: false,
		tarea: {},
	};

	const [state, dispatch] = useReducer(tareasReducer, initialState);

	const baseUrl = process.env.REACT_APP_BACKEND_URL;

	const crearTarea = async (tarea, proyectoId, jwt) => {
		const url = `${baseUrl}/api/v1/tareas/crear-tarea?proyectoId=${proyectoId}`;
		try {
			await fetch(url, {
				method: 'POST',
				body: JSON.stringify(tarea),
				headers: {'Content-Type': 'application/json', 'x-auth-token': jwt},
			})
				.then((resp) => resp.json())
				.then((datos) => console.log(datos));
		} catch (error) {
			console.log(error);
		}
	};

	const obtenerTareas = async (proyectoId, jwt) => {
		const url = `${baseUrl}/api/v1/tareas/obtener-tareas/${proyectoId}`;

		try {
			const datos = await fetch(url, {headers: {'x-auth-token': jwt}}).then((resp) => resp.json());
			dispatch({
				type: OBTENER_TAREAS,
				payload: datos.tareas,
			});
		} catch (error) {
			console.log(error);
		}
	};

	const estadoTarea = async (tareaId, jwt) => {
		const url = `${baseUrl}/api/v1/tareas/estado-tarea/${tareaId}`;

		try {
			await fetch(url, {
				method: 'PATCH',
				headers: {'x-auth-token': jwt},
			});
		} catch (error) {
			console.log(error);
		}
	};

	const tareaEditar = (tarea) => {
		dispatch({
			type: TAREA_EDITAR,
			payload: tarea,
		});
	};

	const editandoTarea = () => {
		dispatch({
			type: EDITANDO_TAREA,
			payload: true,
		});
	};

	const actualizarTarea = async (tareaId, titulo, jwt) => {
		const url = `${baseUrl}/api/v1/tareas/editar-tarea/${tareaId}`;
		try {
			await fetch(url, {
				method: 'PUT',
				body: JSON.stringify({titulo: titulo}),
				headers: {'Content-Type': 'application/json', 'x-auth-token': jwt},
			});
			dispatch({
				type: ACTUALIZAR_TAREA,
			});
		} catch (error) {
			console.log(error);
		}
	};

	const eliminarTarea = async (tareaId, jwt) => {
		const url = `${baseUrl}/api/v1/tareas/eliminar-tarea/${tareaId}`;

		try {
			await fetch(url, {method: 'DELETE', headers: {'x-auth-token': jwt}});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<tareasContext.Provider
				value={{
					tareas: state.tareas,
					editando: state.editando,
					tarea: state.tarea,
					crearTarea,
					obtenerTareas,
					estadoTarea,
					editandoTarea,
					tareaEditar,
					actualizarTarea,
					eliminarTarea,
				}}>
				{props.children}
			</tareasContext.Provider>
		</>
	);
};

export default TareasState;
