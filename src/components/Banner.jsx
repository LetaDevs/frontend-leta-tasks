import React from 'react';
import {Link} from 'react-router-dom';

const Banner = () => {
	return (
		<section className='banner' id='home'>
			<div className='banner__contenido'>
				<div className='banner__texto'>
					<h2>Haz realidad tus más grandes ideas</h2>
					<p>Desde pequeños detalles hasta iniciativas a gran escala</p>
				</div>
				<Link to='/log-in' className='btn banner__btn'>
					Empieza gratis
				</Link>
			</div>
		</section>
	);
};

export default Banner;
