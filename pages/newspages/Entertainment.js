import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import utils from '@/styles/utils.module.css'
import Article from '@/component/Article'

const Entertainment = () => {
    return (
        <>
			<div className={utils.container}>
				<Head>
					<title> Around - Entertainment </title>
					<meta name="description" content="Around - Find out what's going on around the world" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.png" />
				</Head>

				<main className={`${styles.main} ${utils.container2}`}>
					<h1 className={styles.mainHead}> Latest Entertainment News: </h1>
					<h2 className={styles.mainDate}> Updated a minute ago </h2>
					<Article/>
				</main>
			</div>
		</>
    )
}

export default Entertainment