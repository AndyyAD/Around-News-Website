import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home() {
	return (
		<>
			<Head>
				<title> Around - A News Website </title>
				<meta name="description" content="Around - Find out what's going on around the world" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<main className={styles.main}>
				
			</main>
		</>
	)
}
