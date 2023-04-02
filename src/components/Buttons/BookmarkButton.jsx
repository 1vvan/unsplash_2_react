import React, { useState } from 'react';
import iconBookmark from '../../assets/icons/iconBookmark.png'
import iconBookmarkFilled from '../../assets/icons/iconBookmarkFilled.png'

const BookmarkButton = () => {

    const [marked, setMarked] = useState(false);

    const handleClick = () => {
        setMarked(!marked);
    };

    return (
        <button
            style={{ width: '20px', height:'20px'}}
            className='bookmark-btn'
            onClick={handleClick}
            >
            {marked ? (<img src={iconBookmarkFilled} alt="Bookmark" style={{ width: '20px', height:'20px'}}/>)
            : (<img src={iconBookmark} alt="Bookmark" style={{ width: '20px', height:'20px'}}/>)}
        </button>
    );
}

export default BookmarkButton;
