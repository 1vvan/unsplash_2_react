import React, { useState } from 'react';
import iconComment from '../../assets/icons/iconComment.png'
import iconCommentFilled from '../../assets/icons/iconCommentFilled.png'

const CommentButton = () => {

    const [commented, setCommented] = useState(false);
    const [commentedCount, setCommentedCount] = useState(512);

    const handleClick = () => {
        setCommented(!commented);
        if (commented === false) {
            setCommentedCount(commentedCount + 1)
        } else {
            setCommentedCount(commentedCount - 1);
        }
    };

    return (
        <div className="photos__buttons_comment">
            <button
                className='comment-btn'
                onClick={handleClick}
                >
                {commented ? (<img src={iconCommentFilled} alt="Comment"/>)
                : (<img src={iconComment} alt="Comment"/>)}
            </button>
            <span>{commentedCount}</span>
        </div>
    );
}

export default CommentButton;
