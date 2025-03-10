import React from 'react';
import Modal from 'react-modal';

const Popup = ({ isOpen, onRequestClose, children }) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false}>
            {children}
            <button onClick={onRequestClose}>Close</button>
        </Modal>
    );
};

export default Popup;