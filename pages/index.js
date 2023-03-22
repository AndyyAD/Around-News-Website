import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import utils from '@/styles/utils.module.css'
import Link from 'next/link'

export default function Home({ news }) {
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
					{
						news?.map((theNews, index) => (
							<Link href={theNews.url}>
								<div key={index} className={`${styles.article}`}>
									{!!theNews.urlToImage && <img className={styles.newsImg} src={theNews.urlToImage} />}
									<div className={styles.newsText}>
										<h1 className={styles.newsHead}> {theNews.title} </h1>
										<div className={styles.newsDesc}> <p > {theNews.description} </p> </div>
										<p className={styles.newsDate}> {theNews.publishedAt} </p>
									</div>
								</div>
							</Link>
						))
					}
				</main>
			</div>
		</>
	)
}

export const getServerSideProps = async () => {
	const apiRes = await fetch(
		`https://newsapi.org/v2/top-headlines?q=latest&pageSize=10`, {
		headers: {
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
		},
	}
	);
	const apiJson = await apiRes.json();
	const { articles } = apiJson;
	return {
		props: {
			news: articles,
		}
	}
}
