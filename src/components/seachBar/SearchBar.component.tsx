import React, { useState } from 'react';

import styles from './SearchBar.module.css';

const SearchBar: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [category, setCategory] = useState('');
    const [sort, setSort] = useState('Price: High to Low');
    const [isOpenSort, setIsOpenSort] = useState(false);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleCategoryClick = (value: string) => {
        setCategory(value);
    };

    const selectSort = (value: string) => {
        setIsOpenSort(false);
        setSort(value);
    };

    return (
        <div className={styles.searchBar}>
            <div className={styles.searchInputContainer}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search..."
                    className={styles.searchInput}
                />
                <button className={styles.searchButton}>
                    <span>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.25 11.25L15.75 15.75M7.5 12.75C4.60051 12.75 2.25 10.3995 2.25 7.5C2.25 4.60051 4.60051 2.25 7.5 2.25C10.3995 2.25 12.75 4.60051 12.75 7.5C12.75 10.3995 10.3995 12.75 7.5 12.75Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </button>
            </div>
            <div className={styles.rightSection}>
                <div className={styles.categories}>
                    <button
                        onClick={() => handleCategoryClick('shoes')}
                        className={`${styles.categoryBtn} ${category === 'shoes' ? styles.active : ''}`}
                    >
                        Shoes
                    </button>
                    <button
                        onClick={() => handleCategoryClick('electronics')}
                        className={`${styles.categoryBtn} ${category === 'electronics' ? styles.active : ''}`}
                    >
                        Electronics
                    </button>
                    <button
                        onClick={() => handleCategoryClick('clothes')}
                        className={`${styles.categoryBtn} ${category === 'clothes' ? styles.active : ''}`}
                    >
                        Clothes
                    </button>
                </div>
                <div className={styles.sortWrapper}>
                    <label htmlFor="sort" className={styles.sortLabel}>
                        Sort by:
                    </label>

                    <div className={styles.sortContainer}>
                        {!isOpenSort && (
                            <div className={styles.sortContainerWrapper}>
                                <div className={styles.sortInput} onClick={() => setIsOpenSort(true)}>
                                    {sort}

                                    <svg className={styles.arrow} width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M15 19L8 12L15 5"
                                            stroke="#656565"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        )}

                        {isOpenSort && (
                            <div id="sort" className={styles.sortDropdown}>
                                <ul>
                                    <li onClick={() => selectSort('Price: High to Low')}>
                                        Price: High to Low
                                        <svg className={styles.openArrow} width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M15 19L8 12L15 5"
                                                stroke="#656565"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </li>
                                    <li onClick={() => selectSort('Price: Low to High')}>Price: Low to High</li>
                                    <li onClick={() => selectSort('Newest')}>Newest</li>
                                    <li onClick={() => selectSort('Oldest')}>Oldest</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
