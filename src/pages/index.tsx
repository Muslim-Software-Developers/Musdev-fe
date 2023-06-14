import Image from 'next/image';
import { Inter } from 'next/font/google';
import HomePage from '@/components/home';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main className={`min-h-screen bg-white ${inter.className}`}>
			<HomePage />
		</main>
	);
}
