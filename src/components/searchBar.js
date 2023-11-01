import React, { useState } from 'react';
import style from '../modules/searchBar.module.css';

function SearchBar(){
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    return (
        <div className={style.searchDiv}>
            {/* form needs a submit attribute */}
            <form className={style.searchForm}>
                <label className='searchLabel' name="search"></label>
                    <input
                    className={style.searchInput}
                    id="searchId"
                    name="search"
                    type="text" 
                    value={search} 
                    placeholder='Search for track name'
                    onChange={handleChange}
                    />
                    <button className={style.searchButton}>Search</button>
            </form>
        </div>
    );

};


export default SearchBar;