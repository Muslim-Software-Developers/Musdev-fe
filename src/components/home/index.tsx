import React from 'react';
import Hero from './hero';
import Programs from './Programs';
import Gallery from './Gallery';

export const HomePage = () => {
	return (
		<div>
			<Hero />
			<Programs />
			<Gallery />
		</div>
	);
};

export default HomePage;
