import {OBTENER_PROYECTOS, PROYECTO_ACTUAL, EDITAR_PROYECTO, ELIMINAR_PROYECTO} from '../../types';

// eslint-disable-next-line
export default (state, action) => {
	switch (action.type) {
		case OBTENER_PROYECTOS:
			return {
				...state,
				proyectos: action.payload,
			};
		case PROYECTO_ACTUAL:
			return {
				...state,
				proyecto: action.payload,
				editar: false,
			};
		case EDITAR_PROYECTO:
			return {
				...state,
				editar: action.payload,
			};
		case ELIMINAR_PROYECTO:
			return {
				...state,
				proyecto: null,
			};

		default:
			return state;
	}
};
