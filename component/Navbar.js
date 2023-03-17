import React from 'react'
import Link from 'next/link'
import navs from '@/styles/nav.module.css'
import utils from '@/styles/utils.module.css'

const Navbar = () => {
    return (
        <>
            <div className={utils.container}>
                <nav className={navs.titleNav}>
                    <h1 className={navs.logo}> Around </h1>
                </nav>

                <nav className={navs.newsFliter}>
                    <ul className={navs.filterList}>
                        <li> <Link href="/"> Home </Link> </li>
                        <hr />
                        <li> <Link href="/newspages/India"> India </Link> </li>
                        <li> <Link href=""> World </Link> </li>
                        <li> <Link href=""> Business </Link> </li>
                        <li> <Link href=""> Sports </Link> </li>
                        <li> <Link href=""> Entertainment </Link> </li>
                        <li> <Link href=""> Health </Link> </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar