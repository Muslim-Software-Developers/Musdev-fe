import { gallery } from '@/constants/gallery';
import Image from 'next/image';
import React from 'react';

const Gallery = () => {
	return (
		<div className='wrapper pt-32 pb-20 xl:pt-44 xl:pb-32'>
			<h2 className='text-center font-bold text-4xl lg:text-5xl xl:text-6xl text-neutral01'>
				Gallery
			</h2>
			<p className='text-center text-sm lg:text-base max-w-[1050px] mx-auto mt-2 lg:mt-4 xl:mt-5 text-neutral02'>
				Take a glimpse into our vibrant community through our gallery. Explore
				photos and videos capturing the moments of collaboration, learning, and
				celebration that make MusTech Community special
			</p>
			<div className='grid md:grid-cols-3 px-8 2xl:grid-cols-4 mt-10 lg:mt-16 gap-x-10 xl:gap-x-8 gap-y-16'>
				{gallery.map((item) => (
					<div
						key={item.id}
						className='relative h-[300px] md:h-[230px] lg:h-[280px] xl:h-[320px] 2xl:h-[303px]'
					>
						<Image src={'/images/galley01.png'} fill alt='gallery image' />
					</div>
				))}
			</div>
		</div>
	);
};

export default Gallery;
