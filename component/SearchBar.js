import React, { useEffect } from 'react'
import nav from '@/styles/nav.module.css'

const SearchBar = () => {

    // const [notices, setNotices] = useState()
	// const [search, setSearch] = useState <string|null> (null)
	// const [loading, setLoading] = useState()

    // useEffect(() => {
    //     async function fetchData(){
    //         setLoading(true)
    //         const data = await fetch()
    //     }
    // }, [search])

    return (
        <>
            <div className={nav.searchbox}>
                <div className={nav.inputWrap}>
                    <input 
                        className={nav.input} 
                        type="text" 
                        placeholder='Search News' 
                        // onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className={nav.navSuggestWrap}>
                    0 Results Found
                </div>
            </div>
        </>
    )
}

export default SearchBar