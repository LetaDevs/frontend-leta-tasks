import React, {createContext, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = (props) => {
	let currentJwt = JSON.parse(localStorage.getItem('token'));
	if (currentJwt === null) currentJwt = '';

	const [fetching, setFetching] = useState(false);
	const [resultado, setResultado] = useState({});
	const [resetresultado, setResetResultado] = useState(false);
	const [nuevaCuenta, setNuevaCuenta] = useState({});
	const [login, setLogin] = useState({});
	const [activarcuenta, setActivarCuenta] = useState('');
	const [resetpassword, setResetPassword] = useState('');
	const [nuevopassword, setNuevoPassword] = useState({});

	const [jwt, setJwt] = useState(currentJwt);
	const [currentUser, setCurrentUser] = useState({});
	const [autenticado, setAutenticado] = useState(false);
	const [cargando, setCargando] = useState(true);

	const history = useHistory();

	useEffect(() => {
		if (jwt === '') {
			setCargando(false);
			return;
		}

		const obtenerUsuario = async () => {
			const url = `${process.env.REACT_APP_BACKEND_URL}/api/v1/autenticacion`;

			const consulta = await fetch(url, {
				method: 'POST',
				body: JSON.stringify({token: jwt}),
				headers: {'Content-Type': 'application/json'},
			});
			const resp = await consulta.json();
			if (resp.code === 200) {
				setCurrentUser(resp.usuario);
				setCargando(false);
				setAutenticado(true);
			}
		};
		obtenerUsuario();
	}, [jwt]);

	useEffect(() => {
		if (resetresultado) {
			setResultado({});
			setResetResultado(false);
		}
	}, [resetresultado]);

	useEffect(() => {
		if (Object.keys(nuevaCuenta).length === 0) return;
		setFetching(true);

		const crearCuenta = async () => {
			const url = `${process.env.REACT_APP_BACKEND_URL}/api/v1/crear-cuenta`;
			const consulta = await fetch(url, {
				method: 'POST',
				body: JSON.stringify(nuevaCuenta),
				headers: {'Content-Type': 'application/json'},
			});
			const resp = await consulta.json();
			if (resp.code === 201) {
				setFetching(false);
				setResultado({
					code: 201,
					categoria: 'success',
					msg: resp.msg,
				});
			} else {
				setFetching(false);
				setResultado({
					code: 400,
					categoria: 'warning',
					msg: resp.errors[0].msg,
				});
			}
		};
		crearCuenta();
	}, [nuevaCuenta]);

	useEffect(() => {
		if (Object.keys(login).length === 0) return;
		setFetching(true);

		const iniciarSesion = async () => {
			const url = `${process.env.REACT_APP_BACKEND_URL}/api/v1/iniciar-sesion`;
			const consulta = await fetch(url, {
				method: 'POST',
				body: JSON.stringify(login),
				headers: {'Content-Type': 'application/json'},
			});
			const resp = await consulta.json();
			if (resp.errors) {
				setFetching(false);
				setResultado({
					code: 400,
					categoria: 'error',
					msg: resp.errors[0].msg,
				});
			} else {
				setJwt(resp.token);
				localStorage.setItem('token', JSON.stringify(resp.token));
				setFetching(false);
				setLogin({});
				setAutenticado(true);
				history.push('/dashboard');
			}
		};
		iniciarSesion();
		// eslint-disable-next-line
	}, [login]);

	useEffect(() => {
		if (activarcuenta === '') return;
		setFetching(true);

		const activarCuenta = async () => {
			const url = `${process.env.REACT_APP_BACKEND_URL}/confirmar-cuenta/${activarcuenta}`;
			const peticion = await fetch(url, {
				method: 'POST',
			});
			const resp = await peticion.json();
			if (resp.errors) {
				setFetching(false);
				setResultado({
					code: 400,
					categoria: 'error',
					msg: resp.errors[0].msg,
				});
			} else {
				setFetching(false);
				setResultado({
					code: 200,
					categoria: 'success',
					msg: resp.msg,
				});

				const timer = setTimeout(() => {
					history.push('/log-in');
					return clearTimeout(timer);
				}, 2000);
			}
		};
		activarCuenta();
		// eslint-disable-next-line
	}, [activarcuenta]);

	useEffect(() => {
		if (resetpassword === '') return;

		setFetching(true);

		const resetPassword = async () => {
			const url = `${process.env.REACT_APP_BACKEND_URL}/api/v1/reset-password`;
			const peticion = await fetch(url, {
				method: 'POST',
				body: JSON.stringify({email: resetpassword}),
				headers: {'Content-Type': 'application/json'},
			});
			const resp = await peticion.json();
			if (resp.errors) {
				setFetching(false);
				setResultado({
					code: 400,
					categoria: 'error',
					msg: resp.errors[0].msg,
				});
			} else {
				setFetching(false);
				setResultado({
					code: 200,
					categoria: 'success',
					msg: resp.msg,
				});

				const timer = setTimeout(() => {
					return clearTimeout(timer);
				}, 2000);
			}
		};
		resetPassword();
	}, [resetpassword]);

	useEffect(() => {
		if (Object.keys(nuevopassword).length === 0) return;
		setFetching(true);

		const guardarNuevoPassword = async () => {
			const url = `${process.env.REACT_APP_BACKEND_URL}/api/v1/reset-password/${nuevopassword.token}`;
			const peticion = await fetch(url, {
				method: 'POST',
				body: JSON.stringify(nuevopassword),
				headers: {'Content-Type': 'application/json'},
			});
			const resp = await peticion.json();
			if (resp.code === 200) {
				setFetching(false);
				setResultado({
					code: 200,
					categoria: 'success',
					msg: 'Tu password se actualizó correctamente!',
				});
			}
		};
		guardarNuevoPassword();
	}, [nuevopassword]);

	return (
		<AuthContext.Provider
			value={{
				currentUser,
				jwt,
				fetching,
				resultado,
				cargando,
				autenticado,
				setResultado,
				setNuevaCuenta,
				setLogin,
				setCurrentUser,
				setResetResultado,
				setActivarCuenta,
				setResetPassword,
				setNuevoPassword,
				setJwt,
			}}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
