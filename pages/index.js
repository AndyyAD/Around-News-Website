import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import utils from '@/styles/utils.module.css'

export default function Home() {
	return (
		<>
			<div className={utils.container}>
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
						<li> <Link href=""> Home </Link> </li>
						<hr/>
						<li> <Link href="/newspages/India"> India </Link> </li> 
						<li> <Link href=""> World </Link> </li> 
						<li> <Link href=""> Business </Link> </li> 
						<li> <Link href=""> Sports </Link> </li> 
						<li> <Link href=""> Entertainment </Link> </li> 
						<li> <Link href=""> Health </Link> </li> 
					</ul>
				</nav>

				<main className={styles.main}>
					
				</main>
			</div>
		</>
	)
}
