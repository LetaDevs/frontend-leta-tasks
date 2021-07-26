import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Navbar from './Navbar';
import Nosotros from './Nosotros';
import Precios from './Precios';

const Home = () => {
	return (
		<>
			<Navbar />
			<Banner />
			<Nosotros />
			<Precios />
			<Footer />
		</>
	);
};

export default Home;
