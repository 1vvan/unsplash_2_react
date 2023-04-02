import React, { useState } from 'react';
import iconBookmark from '../../assets/icons/iconBookmark.png'
import iconBookmarkFilled from '../../assets/icons/iconBookmarkFilled.png'

const BookmarkButton = () => {

    const [marked, setMarked] = useState(false);

    const handleClick = () => {
        setMarked(!marked);
    };

    return (
        <div className="photos__buttons_save">
            <button
                className='save-btn'
                onClick={handleClick}
                >
                {marked ? (<img src={iconBookmarkFilled} alt="Bookmark"/>)
                : (<img src={iconBookmark} alt="Bookmark"/>)}
            </button>
        </div>
    );
}

export default BookmarkButton;
