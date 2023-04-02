import React, { useState } from 'react';
import iconHeart from '../../assets/icons/iconHeart.png'
import iconHeartFilled from '../../assets/icons/iconHeartFilled.png'

const LikeButton = ({likedCount}) => {

    const [liked, setLiked] = useState(false);
    const handleClick = () => {
        setLiked(!liked);
    }

    return (
        <div className="photos__buttons_like">
            <button
                className='like-btn'
                onClick={handleClick}
                >
                {liked ? (<img src={iconHeartFilled} alt="Like"/>)
                : (<img src={iconHeart} alt="Like"/>)}
            </button>
            <span>{likedCount}</span>
        </div>
    );
}

export default LikeButton;
