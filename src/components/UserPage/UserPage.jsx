import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';
import './UserPage.scss'

const UserPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    
    // Import of state selectedUserImage from Redux Store
    const selectedUser = useSelector(state => state.user.selectedUserImage);
    const [userInfo, setUserInfo] = useState([]);
    useEffect(() => {
        const fetchUserPhotos = async () => {
            const response = await fetch(`https://api.unsplash.com/users/${selectedUser.user.username}?client_id=rbPbnLR-xIOACH1d9pp_Wljai0of3oHtlJoN7_isCC4`);
            const data = await response.json();
            setUserInfo(data);
            setIsLoading(true)
        };
        fetchUserPhotos();
    }, [selectedUser.user.username]);

    // Accept an array of users photos from Unsplash API
    const [userPhotos, setUserPhotos] = useState([]);
    useEffect(() => {
        const fetchUserPhotos = async () => {
            const response = await fetch(`https://api.unsplash.com/users/${userInfo.username}/photos?client_id=rbPbnLR-xIOACH1d9pp_Wljai0of3oHtlJoN7_isCC4&per_page=28`);
            const data = await response.json();
            setUserPhotos(data);
        };
        fetchUserPhotos();
    }, [userInfo.username]);

    // Button Return to Home Page
    const handleReturnToHome = () => {
        window.location.href = "/";
    }

    return (
        <div className='user'>
            <div className="user__container">
                <span className='returnBtn' onClick={handleReturnToHome}>
                    <img src="https://cdn-icons-png.flaticon.com/512/150/150519.png" alt="" /> Return to Home Page
                </span>
                   <div className="user__info">
                    <div className="user__info_body">
                        <div className="user__info_side">
                                <div className="user__avatar">
                                {isLoading ?
                                    (<img src={userInfo.profile_image.large} alt="" />)
                                    : (<RotatingLines
                                        strokeColor="green"
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                        width="50"
                                        visible={true}
                                        /> )}
                                </div>
                           
                            <div className="user__links">
                                <div className="user__nickname">{userInfo.username}</div>
                                {userInfo && (
                                    <div className="user__links_social">
                                        {userInfo.instagram_username && (
                                            <div className="user__links_item">
                                                <a target="_blank" rel="noopener noreferrer" href={`https://www.instagram.com/${userInfo.instagram_username}/`}>
                                                    <img src="https://cdn-icons-png.flaticon.com/512/6433/6433685.png" alt="" />
                                                </a>
                                            </div>
                                        )}
                                        {userInfo && userInfo.social && userInfo.social.portfolio_url ? (
                                            <div className="user__links_item">
                                                <a target="_blank" rel="noopener noreferrer" href={userInfo.social.portfolio_url}>
                                                    <img src="https://cdn-icons-png.flaticon.com/512/696/696755.png" alt="" />
                                                </a>
                                            </div>
                                        ): ('')}
                                    </div>
                                )}

                            </div>
                        </div>
                        <div className="user__info_main">
                            <div className="user__info_main-name">{userInfo.first_name} {userInfo.last_name}</div>
                            <div className="user__info_main-stats">
                                <div className="user-followers">Followers: {userInfo.followers_count}</div>
                                <div className="user-following">Following: {userInfo.following_count}</div>
                            </div>
                            <div className="user__info_main-another-info">
                                <div className="user-another-info-item">
                                    <img src="https://cdn-icons-png.flaticon.com/512/3388/3388815.png" alt="" />
                                    {userInfo.location}
                                    </div>
                                    {userInfo.bio ?
                                        (<div className="user-another-info-item">
                                            <img src="https://cdn-icons-png.flaticon.com/512/9289/9289733.png" alt="" />
                                            {userInfo.bio ? 
                                                (userInfo.bio).split(' ').slice(0, 25).map(word => {
                                                    return word.charAt(0).toUpperCase() + word.slice(1);
                                                }).join(' ') : ''}
                                            {userInfo.bio ? 
                                                    ((userInfo.bio.length > 150) ? '...' : '') : ''}
                                        </div>) : ('')
                                }
                                
                                <div className="user-another-info-item">
                                    <img src="https://cdn-icons-png.flaticon.com/512/2102/2102647.png" alt="" />
                                    Total downloads: {userInfo.downloads}
                                </div>
                                <div className="user-another-info-item">
                                    <img src="https://cdn-icons-png.flaticon.com/512/1216/1216575.png" alt="" />
                                    Total likes: {userInfo.total_likes}
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                
                <div className="user__photos">
                    {userPhotos.map((userInfo) => (
                        <div key={userInfo.id} className="user__photos_item ">
                                <img src={userInfo && userInfo.urls && userInfo.urls.regular
                                    ? userInfo.urls.regular : ''} alt="" />
                        </div>
                    ))}
                    
                </div>
                {userInfo && userInfo.social && userInfo.social.portfolio_url ? (
                        <div className='user__photos_more'>
                            <a target="_blank" rel="noopener noreferrer" href={userInfo.social.portfolio_url}>
                                See more in the portfolio
                            </a>
                        </div>
                    )
                        : (
                            <div className="user__photos_more">
                                <span>That's All...</span>
                            </div>
                        )}
            </div>
        </div>
    );
}

export default UserPage;
