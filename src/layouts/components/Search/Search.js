import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';
import 'tippy.js/dist/tippy.css';

import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';
import * as searchServices from '~/services/searchService';

const cx = classNames.bind(styles);
function Search() {
    const inputRef = useRef();
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debouncedValue);

            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();
    }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleChange = (e) => {
        const searchValue = e.target.value

        if(!searchValue.startsWith(' ')) {
            setSearchValue(searchValue)
        }
    }

    const handleHideResult = () => {
        setShowResult(false);
    };

    // useEffect(() => {
    //     // vì api không cho để chuỗi rỗng
    //     if (!debouncedValue.trim()) {
    //         setSearchResult([]);
    //         return;
    //     }

    //     setLoading(true);

    //     // Fetch
    //     //     setTimeout(() => {
    //     //         fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debouncedValue)}&type=less`)
    //     //             .then((response) => response.json())
    //     //             .then((res) => {
    //     //                 setSearchResult(res.data)
    //     //                 setLoading(false)
    //     //             })
    //     //             .catch(() => {
    //     //                 setLoading(false)
    //     //             })
    //     //     }, 0);

    //     // axios
    //     request
    //         .get('users/search', {
    //             params: {
    //                 q: debouncedValue,
    //                 type: 'less',
    //             },
    //         })
    //         .then((data) => {
    //             setSearchResult(data.data.data);
    //             setLoading(false);
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //         })
    //         .finally(() =>setLoading(false))
    // }, [debouncedValue]);
    return (
        //Xử lý cái warning của thư viện tippy
        <div>
            <HeadlessTippy
                // appendTo={() => document.body}
                interactive={true}
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <div className={cx('search-title')}>Tài khoản</div>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        onFocus={() => setShowResult(true)}
                        value={searchValue}
                        onChange={handleChange}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {/* loading */}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
