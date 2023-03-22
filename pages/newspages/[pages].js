import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import utils from '@/styles/utils.module.css'

const newspages = ({ pageName, news }) => {
    return (
        <>
            <div className={`${styles.main} ${utils.container2}`}>
                <h1 className={styles.mainHead}> {pageName} News: </h1>
                <h2 className={styles.mainDate}> Updated a minute ago </h2>
                {
                    news.map((theNews, index) => (
                        <Link href={theNews.url}>
                            <div key={index} className={`${styles.article}`}>
                                {!!theNews.urlToImage && <img className={styles.newsImg} src={theNews.urlToImage}/>}
                                <div className={styles.newsText}>
                                    <h1 className={styles.newsHead}> {theNews.title} </h1>
                                    <div className={styles.newsDesc}> <p > {theNews.description} </p> </div>
                                    <p className={styles.newsDate}> {theNews.publishedAt} </p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export const getServerSideProps = async (e) => {
    const pageName = e.query.pages;
    if (!pageName) {
        return {
            props: {
                news: [],
                pageName: `${pageName}`,
            }
        }
    }
    const apiRes = await fetch(
        `https://newsapi.org/v2/everything?q=${pageName}&pageSize=7&page=${pageName}`, {
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
            pageName: `${pageName}`,
        }
    }
}

export default newspages