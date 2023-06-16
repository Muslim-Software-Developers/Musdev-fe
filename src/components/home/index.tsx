import React from 'react';
import Hero from './hero';
import Partnerships from "./Partnerships";
import OurBlog from "./OurBlog";
import Programs from './Programs';
import Gallery from './Gallery';

export const HomePage = () => {
	return (
		<div>
			<Hero />
      <Partnerships />
      <OurBlog />
			<Programs />
			<Gallery />
		</div>
	);
};

export default HomePage;
