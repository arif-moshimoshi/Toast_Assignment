import React from 'react';
import PropTypes from 'prop-types';
import "./Toasts.css"
import { MdClose } from 'react-icons/md';
import { RiInformationFill } from "react-icons/ri";
const Toast = ({ type, text, actionText, onClose, onAction }) => {
  return (
    <div className={`toast ${type}`} >
       {type === "notification" && <RiInformationFill  className="toast-icon" />} 
      <span className="toast-text">{text}</span>
      <div className="toast-divider" />
      {actionText && <button className="toast-action" onClick={onAction}>{actionText}</button>}
      <button className="toast-close" onClick={onClose}><MdClose /></button>
    </div>
  );
};

Toast.propTypes = {
  type: PropTypes.oneOf(['default', 'notification']),
  icon: PropTypes.string,
  text: PropTypes.string,
  actionText: PropTypes.string,
  onClose: PropTypes.func,
  onAction: PropTypes.func,
};

Toast.defaultProps = {
  type: 'default',
  icon: null,
  actionText: null,
  onAction: () => { },
};

export default Toast;