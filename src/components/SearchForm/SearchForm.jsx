import React, { useState } from 'react';
import iconSearch from '../../assets/icons/iconSearch.svg'
import '../MainPage/MainPage.scss'

const SearchForm = ({selectedHeroBtn, setSelectedHeroBtn, onSearch}) => {

    const [query, setQuery] = useState("");

    const categoryList = [
        { id: 0, text: 'Trending' },
        { id: 1, text: 'Nature' },
        { id: 2, text: 'Travel' },
        { id: 3, text: 'Animals' },
        { id: 4, text: 'Food' },
        { id: 5, text: 'Health' },
        { id: 6, text: 'Technology' },
        { id: 7, text: 'Events' },
    ]
    const handleClickHeroBtn = (index, value) => {
        if (selectedHeroBtn === index) {
            setSelectedHeroBtn(null);
        } else {
            setSelectedHeroBtn(index);
            onSearch(value)
        }
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        onSearch(query);
    };    


    return (
        <div className="hero__search search">
                            <div className="search__content">
                                <form className="search__input" onSubmit={handleSearchSubmit}>
                                    <input 
                                        value={query} 
                                        onChange={(event) => setQuery(event.target.value)}
                                        type="text" 
                                        name='search' 
                                        placeholder='Search for high-resolution photos' />
                                    <button type='submit' className='search__btn'>
                                        <img src={iconSearch} alt="" />
                                    </button>
                                </form>
                                <div className="search__category_list">
                                     {categoryList.map(({ id, text }) => (
                                        <button
                                        key={id}
                                        className={selectedHeroBtn === id ? 'search__category_item selected' : 'search__category_item'}
                                        onClick={() => handleClickHeroBtn(id, text)}
                                        >
                                        {text}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
    );
}

export default SearchForm;
