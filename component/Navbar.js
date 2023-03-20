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
                        <li> <Link href="/newspages/World"> World </Link> </li>
                        <li> <Link href="/newspages/Business"> Business </Link> </li>
                        <li> <Link href="/newspages/Sports"> Sports </Link> </li>
                        <li> <Link href="/newspages/Entertainment"> Entertainment </Link> </li>
                        <li> <Link href="/newspages/Health"> Health </Link> </li>
                        <li> <Link href="/newspages/Finance"> Finance </Link> </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar