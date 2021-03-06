import React from 'react';
import PropTypes from 'prop-types';
import { FaExclamationCircle } from 'react-icons/fa';

const PopupModal = ({error, onClose=f=>f}) => {
    return (
        <div className="popup-alert" style={{display: error ? 'inline' : 'none', fontSize: "1rem"}}>
            <div>
                <FaExclamationCircle style ={{color: 'red', fontSize: "x-large"}} />
                <p>Task was not entered in text field</p>
            </div>
                
            <button className="alert-btn" onClick={ onClose }>OK</button>
        </div>
    );
}

PopupModal.propTypes = {
    error: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}
 
export default PopupModal;