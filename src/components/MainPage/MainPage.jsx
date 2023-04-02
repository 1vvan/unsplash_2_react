import React, { useState } from 'react';
import iconUser from '../../assets/icons/iconUser.svg'
import iconSearch from '../../assets/icons/iconSearch.svg'
import heroImage from '../../assets/images/heroImage.jpg'
import mainImageRiver from '../../assets/images/mainImage_river.png'
import mainImageBridge from '../../assets/images/mainImage_bridge.png'
import mainImageRoad from '../../assets/images/mainImage_road.png'
import LikeButton from '../Buttons/LikeButton';
import CommentButton from '../Buttons/CommentButton';
import BookmarkButton from '../Buttons/BookmarkButton';
import PhotoModal from '../PhotoModal/PhotoModal';
import buttonMore from '../../assets/icons/buttonMore.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import './MainPage.scss'


const MainPage = () => {
    const [selectedHeroBtn, setSelectedHeroBtn] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleClickHeroBtn = (index) => {
        if (selectedHeroBtn === index) {
        setSelectedHeroBtn(null);
        } else {
        setSelectedHeroBtn(index);
        }
    };


    return (
        <div className='wrapper'>
            <PhotoModal showModal={showModal} setShowModal={setShowModal} />
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
                                <div className="hero__text_title">Photo of the Day by guangxi liu</div>
                                <div className="hero__text_subtitle">The internet's source of freely usable images. Powered by creators everywhere.</div>
                                <div className="hero__text_btn">
                                    <a href='/'>Explore All</a>
                                </div>
                            </div>
                            <div className="hero__image">
                            <img src={heroImage} alt="" />
                        </div>
                        </div>
                        
                        <div className="hero__search search">
                            <div className="search__content">
                                <div className="search__input">
                                    <input type="text" placeholder='Search for high-resolution photos' />
                                    <button type='button' className='search__btn'>
                                        <img src={iconSearch} alt="" />
                                    </button>
                                </div>
                                <div className="search__category_list">
                                     {[
                                        { id: 0, text: 'Trending' },
                                        { id: 1, text: 'Nature' },
                                        { id: 2, text: 'Travel' },
                                        { id: 3, text: 'Animals' },
                                        { id: 4, text: 'Food' },
                                        { id: 5, text: 'Health' },
                                        { id: 6, text: 'Technology' },
                                        { id: 7, text: 'Events' },
                                    ].map(({ id, text }) => (
                                        <button
                                        key={id}
                                        className={selectedHeroBtn === id ? 'search__category_item selected' : 'search__category_item'}
                                        onClick={() => handleClickHeroBtn(id)}
                                        >
                                        {text}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                </div>
                <div className="main__photos photos">
                    <div className="photos__container _container">
                        <div className="photos__body">
                            <div className="photos__item">
                                <div className="photos__card-small">
                                    <div className="photos__image" onClick={() => setShowModal(true)}>
                                        <img src={mainImageRiver} alt="" />
                                    </div>
                                    <div className="photos__card_content">
                                        <div className="photos__text">
                                            <div className="photos__title">Tom Öhlin</div>
                                            <div className="photos__subtitle">Indjinup Spa, WA, Australia (TAGS)</div>
                                            <div className="photos__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
                                        </div>
                                        <div className="photos__buttons">
                                            <BookmarkButton />
                                            <LikeButton />
                                            <CommentButton />
                                        </div>
                                    </div>
                                </div>
                                <div className="photos__card-small">
                                    <div className="photos__image" onClick={() => setShowModal(true)}>
                                        <img src={mainImageBridge} alt="" />
                                    </div>
                                    <div className="photos__card_content">
                                        <div className="photos__text">
                                            <div className="photos__title">Featured meal</div>
                                            <div className="photos__subtitle">Served with french fries + drink</div>
                                            <div className="photos__description">Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more.</div>
                                        </div>
                                        <div className="photos__buttons">
                                            <BookmarkButton />
                                            <LikeButton />
                                            <CommentButton />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="photos__item">
                                <div className="photos__card-big">
                                    <div className="photos__image" onClick={() => setShowModal(true)}>
                                        <img src={mainImageRoad} alt="" />
                                    </div>
                                    <div className="photos__card_content">
                                        <div className="photos__text">
                                            <div className="photos__title">Featured meal</div>
                                            <div className="photos__subtitle">Served with french fries + drink</div>
                                            <div className="photos__description">Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more. Add Tender crisp patty and more.</div>
                                        </div>
                                        <Swiper
                                            spaceBetween={16}
                                            slidesPerView={2}
                                            >
                                            <SwiperSlide className='photos__slider_item'><img src={mainImageRiver} alt="" /></SwiperSlide>
                                            <SwiperSlide className='photos__slider_item'><img src={mainImageBridge} alt="" /></SwiperSlide>
                                            <SwiperSlide className='photos__slider_item'><img src={mainImageRiver} alt="" /></SwiperSlide>
                                            <SwiperSlide className='photos__slider_item'><img src={mainImageBridge} alt="" /></SwiperSlide>
                                            <SwiperSlide className='photos__slider_item'><img src={mainImageRiver} alt="" /></SwiperSlide>
                                            <SwiperSlide className='photos__slider_item'><img src={mainImageBridge} alt="" /></SwiperSlide>
                                        </Swiper>
                                        <div className="photos__buttons-group buttons-group">
                                            <button className="buttons-group__order-button">Order Now</button>
                                            <button className="buttons-group__more-button">
                                                <img src={buttonMore} alt="" />
                                            </button>
                                        </div>
                                        <div className="photos__buttons">
                                            <BookmarkButton />
                                            <LikeButton />
                                            <CommentButton />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="photos__item">
                                <div className="photos__card-big">
                                    <div className="photos__image" onClick={() => setShowModal(true)}>
                                        <img src={mainImageRoad} alt="" />
                                    </div>
                                    <div className="photos__card_content">
                                        <div className="photos__text">
                                            <div className="photos__title">Featured meal</div>
                                            <div className="photos__subtitle">Served with french fries + drink</div>
                                            <div className="photos__description">Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more. Add Tender crisp patty and more.</div>
                                        </div>
                                        <Swiper
                                            spaceBetween={16}
                                            slidesPerView={2}
                                            >
                                            <SwiperSlide className='photos__slider_item'><img src={mainImageRiver} alt="" /></SwiperSlide>
                                            <SwiperSlide className='photos__slider_item'><img src={mainImageBridge} alt="" /></SwiperSlide>
                                            <SwiperSlide className='photos__slider_item'><img src={mainImageRiver} alt="" /></SwiperSlide>
                                            <SwiperSlide className='photos__slider_item'><img src={mainImageBridge} alt="" /></SwiperSlide>
                                            <SwiperSlide className='photos__slider_item'><img src={mainImageRiver} alt="" /></SwiperSlide>
                                            <SwiperSlide className='photos__slider_item'><img src={mainImageBridge} alt="" /></SwiperSlide>
                                        </Swiper>
                                        <div className="photos__buttons-group buttons-group">
                                            <button className="buttons-group__order-button">Order Now</button>
                                            <button className="buttons-group__more-button">
                                                <img src={buttonMore} alt="" />
                                            </button>
                                        </div>
                                        <div className="photos__buttons">
                                            <BookmarkButton />
                                            <LikeButton />
                                            <CommentButton />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="photos__item">
                                <div className="photos__card-small">
                                    <div className="photos__image" onClick={() => setShowModal(true)}>
                                        <img src={mainImageBridge} alt="" />
                                    </div>
                                    <div className="photos__card_content">
                                        <div className="photos__text">
                                            <div className="photos__title">Featured meal</div>
                                            <div className="photos__subtitle">Served with french fries + drink</div>
                                            <div className="photos__description">Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more.</div>
                                        </div>
                                        <div className="photos__buttons">
                                            <BookmarkButton />
                                            <LikeButton />
                                            <CommentButton />
                                        </div>
                                    </div>
                                </div>
                                <div className="photos__card-small">
                                    <div className="photos__image" onClick={() => setShowModal(true)}>
                                        <img src={mainImageRiver} alt="" />
                                    </div>
                                    <div className="photos__card_content">
                                        <div className="photos__text">
                                            <div className="photos__title">Featured meal</div>
                                            <div className="photos__subtitle">Served with french fries + drink</div>
                                            <div className="photos__description">Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more.</div>
                                        </div>
                                        <div className="photos__buttons">
                                            <BookmarkButton />
                                            <LikeButton />
                                            <CommentButton />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="photos__item">
                                <div className="photos__card-small">
                                    <div className="photos__image" onClick={() => setShowModal(true)}>
                                        <img src={mainImageBridge} alt="" />
                                    </div>
                                    <div className="photos__card_content">
                                        <div className="photos__text">
                                            <div className="photos__title">Featured meal</div>
                                            <div className="photos__subtitle">Served with french fries + drink</div>
                                            <div className="photos__description">Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more.</div>
                                        </div>
                                        <div className="photos__buttons">
                                            <BookmarkButton />
                                            <LikeButton />
                                            <CommentButton />
                                        </div>
                                    </div>
                                </div>
                                <div className="photos__card-small">
                                    <div className="photos__image" onClick={() => setShowModal(true)}>
                                        <img src={mainImageRiver} alt="" />
                                    </div>
                                    <div className="photos__card_content">
                                        <div className="photos__text">
                                            <div className="photos__title">Featured meal</div>
                                            <div className="photos__subtitle">Served with french fries + drink</div>
                                            <div className="photos__description">Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more.</div>
                                        </div>
                                        <div className="photos__buttons">
                                            <BookmarkButton />
                                            <LikeButton />
                                            <CommentButton />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="photos__item">
                                <div className="photos__card-small">
                                    <div className="photos__image" onClick={() => setShowModal(true)}>
                                        <img src={mainImageBridge} alt="" />
                                    </div>
                                    <div className="photos__card_content">
                                        <div className="photos__text">
                                            <div className="photos__title">Featured meal</div>
                                            <div className="photos__subtitle">Served with french fries + drink</div>
                                            <div className="photos__description">Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more.</div>
                                        </div>
                                        <div className="photos__buttons">
                                            <BookmarkButton />
                                            <LikeButton />
                                            <CommentButton />
                                        </div>
                                    </div>
                                </div>
                                <div className="photos__card-small">
                                    <div className="photos__image" onClick={() => setShowModal(true)}>
                                        <img src={mainImageRiver} alt="" />
                                    </div>
                                    <div className="photos__card_content">
                                        <div className="photos__text">
                                            <div className="photos__title">Featured meal</div>
                                            <div className="photos__subtitle">Served with french fries + drink</div>
                                            <div className="photos__description">Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more.</div>
                                        </div>
                                        <div className="photos__buttons">
                                            <BookmarkButton />
                                            <LikeButton />
                                            <CommentButton />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default MainPage;
