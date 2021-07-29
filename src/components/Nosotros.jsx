import React from 'react';
import {Link} from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';

const Nosotros = () => {
	return (
		<section className='about' id='about'>
			<div className='about__container container'>
				<div className='about__content'>
					<h2 className='about__title'>
						Sobre <span className='about__title-two'>Nosotros</span>
					</h2>
					<p className='about__description'>
						Te ayudamos a gestionar tus proyectos y a lograr cotas más altas de productividad, independientemente de la
						dinámica de trabajo de tu equipo.
					</p>
					<p className='about__text'>
						<span className='logo-uno'>LETA</span>
						<span className='logo-dos'>Tasks</span> te da siempre las herramientas para que alcances el éxito.
					</p>
					<Link to='/sign-up' className='about__btn'>
						Crea una cuenta gratis
					</Link>
				</div>
				<Hidden smDown>
					<div className='about__img'>
						<img src='./img/about.svg' alt='img about' />
					</div>
				</Hidden>
			</div>
		</section>
	);
};

export default Nosotros;
