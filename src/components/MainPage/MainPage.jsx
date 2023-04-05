import React, { useEffect, useState } from 'react';
import iconUser from '../../assets/icons/iconUser.svg'
import iconSearch from '../../assets/icons/iconSearch.svg'
import PhotoModal from '../PhotoModal/PhotoModal';
// eslint-disable-next-line
import ImageItem from '../ImageItem/ImageItem';
import './MainPage.scss'
import SearchForm from '../SearchForm/SearchForm';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

const MainPage = () => {
    // eslint-disable-next-line
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedHeroBtn, setSelectedHeroBtn] = useState(null);
    // eslint-disable-next-line
    const [searchResults, setSearchResults] = useState([]);
    const [showModal, setShowModal] = useState(false);

    // Get Random Image for Hero
    const [randomImage, setRandomImage] = useState({});
    useEffect(() => {
    const fetchRandomImage = async () => {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=rbPbnLR-xIOACH1d9pp_Wljai0of3oHtlJoN7_isCC4&orientation=landscape`);
        const data = await response.json();
        setRandomImage(data);
        setIsLoading(false)
    };

    fetchRandomImage();
    }, []);

    // Handle Search Photos
    const handleSearch = async (query) => {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${query}&client_id=rbPbnLR-xIOACH1d9pp_Wljai0of3oHtlJoN7_isCC4&orientation=landscape&per_page=12`
        );
        const data = await response.json();
        setSearchResults(data.results);
    };    


    const dispatch = useDispatch();
    const handleUsernameClick = async (randomImage) => {
        await dispatch({ type: "SET_SELECTED_USER_IMAGE", payload: randomImage })
    }

    const selectedUser = useSelector(state => state.user.selectedUserImage);
    // eslint-disable-next-line
    const [userInfo, setUserInfo] = useState([]);
    useEffect(() => {
        const fetchUserPhotos = async () => {
            const response = await fetch(`https://api.unsplash.com/users/${selectedUser.username}?client_id=rbPbnLR-xIOACH1d9pp_Wljai0of3oHtlJoN7_isCC4`);
            const data = await response.json();
            setUserInfo(data);
        };
        fetchUserPhotos();
    }, [selectedUser.username]);

    return (
        <div className='wrapper'>
            <PhotoModal showModal={showModal} setShowModal={setShowModal}/>
            <header className="header">
                <div className="header__container  _container">
                    <nav className='header__menu menu'>
                        <ul className="menu__list">
                            <li className="menu__item">
                                <a className='menu__link active' href="/">Home</a>
                            </li>
                            <li className="menu__item">
                                <a className='menu__link' href="/">Featured collections</a>
                            </li>
                            <li className="menu__item">
                                <a className='menu__link' href="/">My profile</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__buttons">
                        <a href="/" className='header__buttons_item'>
                            <img src={iconUser} alt="" />
                        </a>
                        <a href="/" className='header__buttons_item'>
                            <img src={iconSearch} alt="" />
                        </a>
                    </div>
                </div>
            </header>
            <main className="main">
                <div className="main__hero hero">
                    <div className="hero__content">
                                <div className="hero__text">
                            <div className="hero__text_title">Photo of the Day by
                                    <span className='username'>{randomImage.user && randomImage.user.username ? randomImage.user.username : ''}</span>
                            </div>
                                    <div className="hero__text_subtitle">
                                        {randomImage.alt_description ? 
                                        randomImage.alt_description.charAt(0).toUpperCase() + randomImage.alt_description.slice(1) : 
                                        ""}
                                    </div>
                            <div className="hero__text_btn">
                                        <Link to={`/user`}>
                                            <span onClick={() => handleUsernameClick(randomImage)}>Explore All</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="hero__image">
                                    {!isLoading ? 
                                    (<img src={randomImage.urls && randomImage.urls.full ? randomImage.urls.full : ''} alt={''} />)
                                    : (<RotatingLines
                                        strokeColor="green"
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                        width="96"
                                        visible={true}
                                        />)
                                    }
                                </div>
                        </div>
                    <SearchForm onSearch={handleSearch} selectedHeroBtn={selectedHeroBtn} setSelectedHeroBtn={setSelectedHeroBtn} />
                </div>
                <div className="main__photos photos">
                    <div className="photos__container _container">
                        <div className="photos__body">
                            <ImageItem searchResults={searchResults} setShowModal={setShowModal} images={images} setImages={setImages} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default MainPage;
