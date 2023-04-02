import React from 'react';
import imageRiver from '../../assets/images/mainImage_river.png'
import iconClose from '../../assets/icons/iconClose.png'
import avatarModal from '../../assets/images/avatarModal.png'
import modalImageBoat from '../../assets/images/modalImage_boat.png'
import modalImageOcean from '../../assets/images/modalImage_ocean.png'
import modalImageBeach from '../../assets/images/modalImage_beach.png'
import buttonMore from '../../assets/icons/buttonMore.png'
import './PhotoModal.scss'

const PhotoModal = ({showModal, setShowModal}) => {
    return (
        <div className={showModal ? "modal active" : "modal"} onClick={() => setShowModal(false)}>
            <div className="modal__body">
                <div className="modal__image">
                    <img src={imageRiver} alt="" />
                </div>
                <div className='modal__close-btn' onClick={() => setShowModal(false)}>
                    <img src={iconClose} alt="" />
                </div>
                <div className="modal__user">
                    <div className="modal__user_avatar">
                        <img src={avatarModal} alt="" />
                    </div>
                    <div className="modal__user_text">
                        <div className="modal__user_name">Stephanie Hau</div>
                        <div className="modal__user_account">@stephiime</div>
                    </div>
                </div>
                <div className="modal__photos">
                    <div className="modal__photos_item boat">
                        <img src={modalImageBoat} alt="" />
                    </div>
                    <div className="modal__photos_item">
                        <img src={modalImageOcean} alt="" />
                    </div>
                    <div className="modal__photos_item">
                        <img src={modalImageBeach} alt="" />
                    </div>
                    <div className="modal__photos_item boat">
                        <img src={modalImageBoat} alt="" />
                    </div>
                    <div className="modal__photos_item">
                        <img src={modalImageOcean} alt="" />
                    </div>
                    <div className="modal__photos_item">
                        <img src={modalImageBeach} alt="" />
                    </div>
                    <div className="modal__photos_item boat">
                        <img src={modalImageBoat} alt="" />
                    </div>
                    <div className="modal__photos_item">
                        <img src={modalImageOcean} alt="" />
                    </div>
                    <div className="modal__photos_item">
                        <img src={modalImageBeach} alt="" />
                    </div>
                    <div className="modal__photos_item boat">
                        <img src={modalImageBoat} alt="" />
                    </div>
                    <div className="modal__photos_item">
                        <img src={modalImageOcean} alt="" />
                    </div>
                    <div className="modal__photos_item">
                        <img src={modalImageBeach} alt="" />
                    </div>
                </div>
                <div className="modal__button-more">
                    <img src={buttonMore} alt="" />
                </div>
            </div>
        </div>
    );
}

export default PhotoModal;
