import React, { useEffect } from 'react';
import BookmarkButton from '../Buttons/BookmarkButton';
import CommentButton from '../Buttons/CommentButton';
import LikeButton from '../Buttons/LikeButton';
import mainImageRiver from '../../assets/images/mainImage_river.png'
import { useDispatch } from 'react-redux'
import '../MainPage/MainPage.scss'

const ImageItem = ({setShowModal, setImages, images, searchResults}) => {

    // Getting Random Photos From Unsplash API
    useEffect(() => {
        const fetchImages = async() => {
            const response = await fetch(`https://api.unsplash.com/photos?client_id=rbPbnLR-xIOACH1d9pp_Wljai0of3oHtlJoN7_isCC4&per_page=12`)
            const data = await response.json()
            setImages(data)
        }
        fetchImages();
    }, [setImages])



    // const images = [
    //     {
    //         id: "M6eWvLb2EYY",
    //         urls: {
    //             full: "https://images.unsplash.com/photo-1553531087-b25a0b9a68ab?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0Mjk4NTN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4MDQ1NDI3MA&ixlib=rb-4.0.3&q=85"
    //         },
    //         user: {
    //             name: "Boxed Water Is Better",
    //             location: "Holland, MI",
    //             username:'1111'
    //         },
    //         description: null,
    //         alt_description: "Boxed Water cartons on the black and white ground",
    //         likes: 124
    //     },
    //     {
    //         id: "hJo714ChDA4",
    //         urls: {
    //             full: "https://images.unsplash.com/photo-1680399524821-d4e6b225b0ee?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0Mjk4NTN8MHwxfGFsbHwyfHx8fHx8Mnx8MTY4MDQ1NDI3MA&ixlib=rb-4.0.3&q=85"
    //         },
    //         user: {
    //             name: "Jason An",
    //             location: "Montreal, Canada",
    //             username:'2222'
    //         },
    //         description: null,
    //         alt_description: "a woman leaning against a wall with a cup of coffee",
    //         likes: 342
    //     },
    // ]

    const dispatch = useDispatch();
    const handleImageClick = async (image) => {
        await dispatch({ type: "SET_SELECTED_IMAGE", payload: image })
        await setShowModal(true)
    }


    return (
        <>
            {searchResults.length > 0 ? (
                searchResults.map((image) => (
                    // Display of the results found
                        <div className="photos__item" key={image.id}>
                            <div className="photos__card">
                                <div className="photos__image" onClick={() => handleImageClick(image)}>
                                    <img src={image.urls.full || ''} alt='' loading="lazy" />
                                </div>
                                <div className="photos__card_content">
                                    <div className="photos__text">
                                        <div className="photos__title">
                                            {image.user.name || ''} 
                                        </div>
                                        <div className="photos__subtitle">{image.user.location || ''}</div>
                                        <div className="photos__description">
                                            {(image.description || image.alt_description) ? 
                                                (image.description || image.alt_description).split(' ').slice(0, 25).map(word => {
                                                    return word.charAt(0).toUpperCase() + word.slice(1);
                                                }).join(' ') : ''}
                                            {(image.description || image.alt_description) ? 
                                                    (((image.description || image.alt_description).length > 150) ? '...' : '') : ''}
                                        </div>
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
                ))
            ) : (
                images.map((image) => (
                    // Display of the random images
                        <div className="photos__item" key={image.id}>
                            <div className="photos__card">
                                <div className="photos__image" onClick={() => handleImageClick(image)}>
                                    <img src={image.urls.regular || mainImageRiver} alt='' loading="lazy" />
                                </div>
                                <div className="photos__card_content">
                                    <div className="photos__text">
                                        <div className="photos__title">{image.user.name || ''}</div>
                                        <div className="photos__subtitle">{image.user.location || ''}</div>
                                        <div className="photos__description">
                                            {(image.description || image.alt_description) ? 
                                                (image.description || image.alt_description).split(' ').slice(0, 25).map(word => {
                                                    return word.charAt(0).toUpperCase() + word.slice(1);
                                                }).join(' ') : ''}
                                            {(image.description || image.alt_description) ? 
                                                    (((image.description || image.alt_description).length > 150) ? '...' : '') : ''}
                                        </div>
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
                ))
            )}
    </>
    );
}

export default ImageItem;
