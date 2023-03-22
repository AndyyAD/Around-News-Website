import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import utils from '@/styles/utils.module.css'
import Link from 'next/link'

const Article = () => {
    return (
        <>
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
        </>
    )
}

export default Article