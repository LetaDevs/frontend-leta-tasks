import React from 'react';
import {Link} from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';

const Nosotros = () => {
	return (
		<section className='nosotros' id='nosotros'>
			<div className='nosotros__contenedor'>
				<div className='nosotros__contenido'>
					<h2 className='nosotros__titulo'>
						Sobre <span>Nosotros</span>
					</h2>
					<p className='nosotros__descripcion'>
						Te ayudamos a gestionar tus proyectos y a lograr cotas más altas de productividad, independientemente de la
						dinámica de trabajo de tu equipo.
					</p>
					<p className='nosotros__parrafo'>
						<span className='logo-uno'>LETA</span>
						<span className='logo-dos'>Tasks</span> te da siempre las herramientas para que alcances el éxito.
					</p>
					<Link to='/sign-up' className='btn banner__btn'>
						Crea una cuenta gratis
					</Link>
				</div>
				<Hidden smDown>
					<div className='nosotros__img'>
						<img src='./img/about.svg' alt='img nosotros' />
					</div>
				</Hidden>
			</div>
		</section>
	);
};

export default Nosotros;
