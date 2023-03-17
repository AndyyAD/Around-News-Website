import React from 'react'
import nav from '@/styles/nav.module.css'

const SearchBar = () => {
    return (
        <>
            <div className={nav.searchbox}>
                <div className={nav.inputWrap}>
                    <input className={nav.input} type="text" placeholder='Search News'/>
                </div>
            </div>
        </>
    )
}

export default SearchBar