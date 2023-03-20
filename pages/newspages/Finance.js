import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import utils from '@/styles/utils.module.css'

const Finance = () => {
    return (
        <>
			<div className={utils.container}>
				<Head>
					<title> Around - Finance </title>
					<meta name="description" content="Around - Find out what's going on around the world" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.png" />
				</Head>

				<main className={`${styles.main} ${utils.container2}`}>
					<h1 className={styles.mainHead}> Latest Finance News: </h1>
					<h2 className={styles.mainDate}> Updated a minute ago </h2>
					<div className={`${styles.article} ${styles.article1}`}>
						<div className={styles.newsImg}>  </div>
						<div className={styles.newsText}> 
							<h1 className={styles.newsHead}> Punjab Internet shut down from 2 days </h1>
							<p className={styles.newsDesc}> In the midst of the case between Amrit pal and punjab govt. Punjab govt has shut down the whole states internet for public safety reason. </p>
							<p className={styles.newsDate}> Few minutes ago </p>
						</div>
					</div>
					<div className={`${styles.article} ${styles.article1}`}>
						<div className={styles.newsImg}>  </div>
						<div className={styles.newsText}> 
							<h1 className={styles.newsHead}> Punjab Internet shut down from 2 days </h1>
							<p className={styles.newsDesc}> In the midst of the case between Amrit pal and punjab govt. Punjab govt has shut down the whole states internet for public safety reason. </p>
							<p className={styles.newsDate}> Few minutes ago </p>
						</div>
					</div>
					<div className={`${styles.article} ${styles.article1}`}>
						<div className={styles.newsImg}>  </div>
						<div className={styles.newsText}> 
							<h1 className={styles.newsHead}> Punjab Internet shut down from 2 days </h1>
							<p className={styles.newsDesc}> In the midst of the case between Amrit pal and punjab govt. Punjab govt has shut down the whole states internet for public safety reason. </p>
							<p className={styles.newsDate}> Few minutes ago </p>
						</div>
					</div>
					<div className={`${styles.article} ${styles.article1}`}>
						<div className={styles.newsImg}>  </div>
						<div className={styles.newsText}> 
							<h1 className={styles.newsHead}> Punjab Internet shut down from 2 days </h1>
							<p className={styles.newsDesc}> In the midst of the case between Amrit pal and punjab govt. Punjab govt has shut down the whole states internet for public safety reason. </p>
							<p className={styles.newsDate}> Few minutes ago </p>
						</div>
					</div>
					<div className={`${styles.article} ${styles.article1}`}>
						<div className={styles.newsImg}>  </div>
						<div className={styles.newsText}> 
							<h1 className={styles.newsHead}> Punjab Internet shut down from 2 days </h1>
							<p className={styles.newsDesc}> In the midst of the case between Amrit pal and punjab govt. Punjab govt has shut down the whole states internet for public safety reason. </p>
							<p className={styles.newsDate}> Few minutes ago </p>
						</div>
					</div>
				</main>
			</div>
		</>
    )
}

export default Finance