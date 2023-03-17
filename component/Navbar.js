import React from 'react'
import Link from 'next/link'
import navs from '@/styles/nav.module.css'
import SearchBar from '@/component/SearchBar'

const Navbar = () => {
    return (
        <>
            <nav className={navs.navbar}>
                <div className={navs.upperNav}>
                    <h1 className={navs.logo}> Around News </h1>
                    <SearchBar/>
                </div>
                <div className={navs.newsFliter}>
                    <ul className={navs.filterList}>
                        <li> <Link href="/"> Home </Link> </li>
                        <hr />
                        <li> <Link href="/newspages/India"> India </Link> </li>
                        <li> <Link href=""> World </Link> </li>
                        <li> <Link href=""> Business </Link> </li>
                        <li> <Link href=""> Sports </Link> </li>
                        <li> <Link href=""> Entertainment </Link> </li>
                        <li> <Link href=""> Health </Link> </li>
                        <li> <Link href=""> Finance </Link> </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar