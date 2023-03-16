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

			<nav className={styles.titleNav}>
				<h1 className={styles.logo}> Around </h1>
			</nav>

			<nav className={styles.newsFliter}>
				<ul className={styles.filterList}>
					<li> <a href=""> Home </a> </li>
					<hr/>
					<li> <a href=""> India </a> </li>
					<li> <a href=""> World </a> </li>
					<li> <a href=""> Business </a> </li>
					<li> <a href=""> Sports </a> </li>
					<li> <a href=""> Entertainment </a> </li>
					<li> <a href=""> Health </a> </li>
				</ul>
			</nav>

			<main className={styles.main}>
				
			</main>
		</>
	)
}
