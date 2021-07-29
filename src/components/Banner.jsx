import React from 'react';
import {Link} from 'react-router-dom';

const Banner = () => {
	return (
		<section className='banner' id='home'>
			<div className='banner__contenido'>
				<div className='banner__texto'>
					<h2 className='banner__texto-titulo'>Haz realidad tus más grandes ideas</h2>
					<p className='banner__texto-descripcion'>Desde pequeños detalles hasta iniciativas a gran escala</p>
				</div>
				<Link to='/log-in' className='banner__btn'>
					Empieza gratis
				</Link>
			</div>
		</section>
	);
};

export default Banner;
