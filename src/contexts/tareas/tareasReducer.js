import {OBTENER_TAREAS, EDITANDO_TAREA, TAREA_EDITAR, ACTUALIZAR_TAREA} from '../../types';

// eslint-disable-next-line
export default (state, action) => {
	switch (action.type) {
		case OBTENER_TAREAS:
			return {
				...state,
				tareas: action.payload,
			};
		case EDITANDO_TAREA:
			return {
				...state,
				editando: action.payload,
			};
		case TAREA_EDITAR:
			return {
				...state,
				tarea: action.payload,
			};
		case ACTUALIZAR_TAREA:
			return {
				...state,
				editando: false,
			};

		default:
			return state;
	}
};
