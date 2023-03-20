import React from 'react'
import foots from '@/styles/footer.module.css'

const Footer = () => {
    return (
        <>
            <footer className={foots.main}>
                <p className={foots.desc}> Designed by <span> Ashish Deb </span> ❤️ </p>
            </footer>
        </>
    )
}

export default Footer