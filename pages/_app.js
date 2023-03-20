import '@/styles/globals.css'
import Navbar from '@/component/Navbar'
import Footer from '@/component/Footer'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
	return (
		<main className={inter.className}>
			<Navbar/>
			<Component {...pageProps} />
			<Footer/>
		</main>
	)
}
