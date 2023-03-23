import { useState } from 'react'
import { useRouter } from 'next/router';
import nav from '@/styles/nav.module.css'

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const onSearch = (e) => {
        e.preventDefault();
        router.push(`/newspages/${search}`);
    };

    return (
        <>
            <div className={nav.searchbox}>
                <div className={nav.inputWrap}>
                    <form onSubmit={onSearch}>
                        <input
                            className={nav.input}
                            type="text"
                            placeholder='Search News'
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </form>
                </div>
            </div>
        </>
    )
};

export default SearchBar