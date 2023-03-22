import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import utils from '@/styles/utils.module.css'
import Link from 'next/link'

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

				<main className={`${styles.main} ${utils.container2}`}>
					<h1 className={styles.mainHead}> Latest News: </h1>
					<h2 className={styles.mainDate}> Updated a minute ago </h2>
					<Link href="">
						<div className={`${styles.article} ${styles.article1}`}>
							<div className={styles.newsImg}>  </div>
							<div className={styles.newsText}>
								<h1 className={styles.newsHead}>  </h1>
								<p className={styles.newsDesc}>  </p>
								<p className={styles.newsDate}>  </p>
							</div>
						</div>
					</Link>
				</main>
			</div>
		</>
	)
}
