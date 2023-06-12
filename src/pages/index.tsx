import Image from 'next/image';
import { Inter } from 'next/font/google';
import HomePage from '@/components/home';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-white ${inter.className}`}
    >
     <HomePage />
    </main>
  )
}
