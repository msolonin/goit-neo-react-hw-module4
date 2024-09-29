import React from 'react';
import Modal from 'react-modal';

const ImageModal = ({ isOpen, onRequestClose, image }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                },
                content: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    transform: 'translate(-50%, -50%)',
                    border: 'none',
                    background: 'none',
                    padding: 0,
                },
            }}
            ariaHideApp={false}
        >
            {image && (
                <img src={image.urls.regular} alt={image.alt_description} style={{ maxWidth: '100%', maxHeight: '100%' }} />
            )}
        </Modal>
    );
};

export default ImageModal;