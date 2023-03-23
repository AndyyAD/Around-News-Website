import Link from 'next/link'
import navs from '@/styles/nav.module.css'
import SearchBar from '@/component/SearchBar'
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter();

    function isActive(route){
        if(route==router.query.pages || route==router.pathname){
            return "activeLink"
        } else ""
    }

    return (
        <>
            <nav className={navs.navbar}>
                <div className={navs.upperNav}>
                <Link href="/">
                    <h1 className={navs.logo}> Around News </h1>
                </Link>
                <SearchBar/>
                </div>
                <div className={navs.newsFliter}>
                    <ul className={navs.filterList}>
                        <li className={isActive('/')}> <Link href="/"> Home </Link> </li>
                        <hr />
                        <li className={isActive('India')}> <Link href="/newspages/India"> India </Link> </li>
                        <li className={isActive('World')}> <Link href="/newspages/World"> World </Link> </li>
                        <li className={isActive('Business')}> <Link href="/newspages/Business"> Business </Link> </li>
                        <li className={isActive('Sports')}> <Link href="/newspages/Sports"> Sports </Link> </li>
                        <li className={isActive('Entertainment')}> <Link href="/newspages/Entertainment"> Entertainment </Link> </li>
                        <li className={isActive('Health')}> <Link href="/newspages/Health"> Health </Link> </li>
                        <li className={isActive('Finance')}> <Link href="/newspages/Finance"> Finance </Link> </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar