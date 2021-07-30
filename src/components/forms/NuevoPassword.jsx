import React, {useState, useEffect, useContext} from 'react';
import {Link, useParams, useHistory} from 'react-router-dom';
import useForm from '../../hooks/useForm';
import Alert from '../extras/Alert';
import Spinner from '../extras/Spinner';
import {AuthContext} from '../../contexts/AuthContext';

import 'animate.css';

const NuevoPassword = () => {
	const {fetching, resultado, setResetResultado, setNuevoPassword} = useContext(AuthContext);

	const [msg, setMsg] = useState({
		categoria: '',
		msg: '',
	});
	const [alerta, setAlerta] = useState(false);

	const [formValues, handleChange, resetForm] = useForm({
		password: '',
		rePassword: '',
	});
	const {password, rePassword} = formValues;

	const history = useHistory();
	const {token} = useParams();

	useEffect(() => {
		if (Object.keys(resultado).length === 0) return;

		setAlerta(true);
		setMsg({
			categoria: resultado.categoria,
			msg: resultado.msg,
		});
		setTimeout(() => {
			setAlerta(false);
			if (resultado.code === 200) {
				resetForm();
				setResetResultado(true);
				return history.push('/log-in');
			}
		}, 3000);
		// eslint-disable-next-line
	}, [resultado]);

	useEffect(() => {
		const validarToken = async () => {
			const url = `${process.env.REACT_APP_BACKEND_URL}/api/v1/reset-password/validacion/${token}`;
			const peticion = await fetch(url, {method: 'POST'});
			const resp = await peticion.json();
			if (resp.code !== 200) return history.push('/re-password');
		};
		validarToken();
		// eslint-disable-next-line
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!Object.values(formValues).every((value) => value.trim() !== '')) {
			setAlerta(true);
			setMsg({
				categoria: 'error',
				msg: 'Todos los campos son obligatorios!',
			});
			const timer = setTimeout(() => {
				setAlerta(false);
				return clearTimeout(timer);
			}, 3000);
			return;
		}

		if (password !== rePassword) {
			setAlerta(true);
			setMsg({
				categoria: 'error',
				msg: 'Ambos passwords deben ser iguales!',
			});
			const timer = setTimeout(() => {
				setAlerta(false);
				return clearTimeout(timer);
			}, 3000);
			return;
		}

		setNuevoPassword({
			token,
			password,
			rePassword,
		});
	};

	return (
		<div className='form__bg'>
			<div className='form__container animate__animated animate__fadeIn'>
				<div>
					<Link to='/'>
						<h4 className='form__logo'>
							LETA<span className='form__logo-two'>Tasks</span>
						</h4>
					</Link>
					<h2 className='form__title'>NUEVO PASSWORD</h2>
				</div>
				<form onSubmit={handleSubmit}>
					<div className='form__alert'>
						{alerta ? <Alert categoria={msg.categoria} msg={msg.msg} /> : null}
						{fetching ? <Spinner /> : null}
					</div>
					<div className='form__field'>
						<label htmlFor='password' className='form__label'>
							Password:
						</label>
						<input
							type='password'
							name='password'
							value={password}
							id='password'
							className='form__input'
							autoComplete='off'
							onChange={handleChange}
						/>
					</div>
					<div className='form__field'>
						<label htmlFor='rePassword' className='form__label'>
							Repetir password:
						</label>
						<input
							type='password'
							name='rePassword'
							value={rePassword}
							id='rePassword'
							className='form__input'
							autoComplete='off'
							onChange={handleChange}
						/>
					</div>
					<button type='submit' className='form__btn'>
						ENVIAR
					</button>
				</form>
				<div className='form__extras'></div>
			</div>
		</div>
	);
};

export default NuevoPassword;
