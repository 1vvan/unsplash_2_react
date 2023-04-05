import React, { useEffect, useState } from 'react';
import iconClose from '../../assets/icons/iconClose.png'
import buttonMore from '../../assets/icons/buttonMore.png'
import { useDispatch, useSelector } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';
import './PhotoModal.scss'
import LineChart from '../Charts/LineChart';
import { Link } from 'react-router-dom';


const PhotoModal = ({ showModal, setShowModal }) => {
    const [isLoading, setIsLoading] = useState(false);

    // Get Selected Image Array
    const selectImage = useSelector(state => state.image.selectedImage);
    useEffect(() => {
        setIsLoading(true)
    }, [setIsLoading]);


    // Get Selected Image Author Array
    // eslint-disable-next-line 
    const [selectImageUser, setSelectImageUser] = useState([]);
    useEffect(() => {
        const fetchselectImageUser = async () => {
            const response = await fetch(`https://api.unsplash.com/users/${selectImage.user.username}?client_id=rbPbnLR-xIOACH1d9pp_Wljai0of3oHtlJoN7_isCC4`);
            const data = await response.json();
            setSelectImageUser(data);
        };
        fetchselectImageUser();
        
    }, [selectImage.user.username]);

    // Get Selected Image Stats
    const [selectedImageViews, setSelectedImageViews] = useState([]);
    const [selectedImageLikes, setSelectedImageLikes] = useState([]);
    const [selectImageStat, setSelectImageStat] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch(`https://api.unsplash.com/photos/${selectImage.id}/statistics?client_id=rbPbnLR-xIOACH1d9pp_Wljai0of3oHtlJoN7_isCC4`);
        const data = await response.json();
        setSelectImageStat(data)
        const viewsData = data.views.historical.values;
        const likesData = data.likes.historical.values;
        setSelectedImageViews(viewsData);
        setSelectedImageLikes(likesData);
        }
        fetchData();
    }, [selectImage]);
    useEffect(() => {
        console.log('selectImageUserStat');
        console.log(selectImageStat);
    }, [selectImageStat]);

    // Data for Chart in Modal
    const chartData = {
        labels: selectedImageViews.map((item) => item.date).slice(0, 30),
        datasets: [
        {
            label: 'Views',
            data: selectedImageViews.map((item) => item.value).slice(0, 30),
            fill: false,
            borderColor: 'green',
            tension: 0.1,
            },
            {
        label: 'Likes',
        data: selectedImageLikes.map((item) => item.value).slice(0, 30),
        fill: false,
        borderColor: 'red',
        tension: 0.1,
      },
        ],
    };
    
    
    const dispatch = useDispatch();
    const handleUsernameClick = async (selectImage) => {
        await dispatch({ type: "SET_SELECTED_USER_IMAGE", payload: selectImage })
    }


    return (
        <div className={showModal ? "modal active" : "modal"} onClick={() => setShowModal(false)}>
            <div className='modal__body' onClick={(e) => e.stopPropagation()}>
                <div className='modal__image'>
                    {isLoading ?
                    (<img src={selectImage.urls.regular} alt="" />)
                    : (<RotatingLines
                            strokeColor="green"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="50"
                            visible={true}
                        />
                    )}
                </div>
                <div className='modal__close-btn' onClick={() => setShowModal(false)}>
                    <img src={iconClose} alt="" />
                </div>
                <div className="modal__user">
                    <div className="modal__user_avatar">
                        <Link to={`/user`}>
                            {isLoading ?
                            (<img onClick={() => handleUsernameClick(selectImage)} src={selectImage && selectImage.user && selectImage.user.profile_image &&selectImage.user.profile_image.large} alt="" />)
                            : (<RotatingLines
                                strokeColor="green"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="50"
                                visible={true}
                            />
                        )}
                        </Link>
                    </div>
                    <div className="modal__user_text">
                        <Link to={`/user`}>
                            <a onClick={() => handleUsernameClick(selectImage)} href='/' className="modal__user_name">{selectImage.user.name || ''}</a>
                        </Link>
                        <div className="modal__user_account">@{selectImage.user.username || ''}</div>
                    </div>
                    <div className="modal__user_stats">
                        <div className="modal__user_stats-item">Likes: {selectImageStat.likes ? selectImageStat.likes.total : ''}</div>
                        <div className="modal__user_stats-item">Total downloads: {selectImageStat.downloads ? selectImageStat.downloads.total : ''}</div>
                        <div className="modal__user_stats-item">Total views: {selectImageStat.views ? selectImageStat.views.total : ''}</div>
                    </div>
                </div>
                <div className="modal__another-info">
                    <div className="modal__another-info_item">
                        <img src="https://cdn-icons-png.flaticon.com/512/9289/9289733.png" alt="" />{selectImage.alt_description.charAt(0).toUpperCase() + selectImage.alt_description.slice(1)}
                    </div>
                    <div className="modal__another-info_item">
                        <img src="https://cdn-icons-png.flaticon.com/512/819/819865.png" alt="" />{selectImage.user.location}
                    </div>
                </div>
                <div className="modal__chart">
                    <LineChart chartData={chartData}/>
                </div>
                <div className="modal__button-more">
                    <img src={buttonMore} alt="" />
                </div>
            </div>
        </div>
    );
}

export default PhotoModal;
