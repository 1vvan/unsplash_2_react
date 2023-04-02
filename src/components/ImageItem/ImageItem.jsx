import React, { useEffect, useState } from 'react';
import BookmarkButton from '../Buttons/BookmarkButton';
import CommentButton from '../Buttons/CommentButton';
import LikeButton from '../Buttons/LikeButton';
import mainImageRiver from '../../assets/images/mainImage_river.png'
import '../MainPage/MainPage.scss'

const ImageItem = ({setShowModal}) => {

    const [images, setImages] = useState([]);
    useEffect(() => {
        const fetchImages = async() => {
            const response = await fetch(`https://api.unsplash.com/photos?client_id=rbPbnLR-xIOACH1d9pp_Wljai0of3oHtlJoN7_isCC4&per_page=28&orientation=landscape`)
            const data = await response.json()
            setImages(data)
        }
        fetchImages();
    }, [])
    console.log(images);


    return (
        <>
            {images.map((image, id) => (
            <div className="photos__item" key={image.id}>
                <div className="photos__card-small">
                    <div className="photos__image" onClick={() => setShowModal(true)}>
                        <img src={image.urls.full || mainImageRiver} alt='' loading="lazy" />
                    </div>
                    <div className="photos__card_content">
                        <div className="photos__text">
                            <div className="photos__title">{image.user.name || ''}</div>
                            <div className="photos__subtitle">{image.user.location || ''}</div>
                            <div className="photos__description">{image.description || image.alt_description}</div>
                        </div>
                        <div className="photos__buttons">
                            <BookmarkButton />
                            <div className='photos__buttons_reaction'>
                                <LikeButton likedCount={image.likes}/>
                                <CommentButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </>
    );
}

export default ImageItem;
