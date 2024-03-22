import React from 'react';
import PropTypes from 'prop-types';
import "./Toasts.css"
import { MdClose } from 'react-icons/md';
import { RiInformationFill,RiErrorWarningFill } from "react-icons/ri";
import { IoWarning } from "react-icons/io5";
import { IoIosCheckmarkCircle } from "react-icons/io";
const Toast = ({ type, text, actionText, onClose, onAction }) => {
  return (
    <div className={`toast ${type}`} >
       {type === "notification" && <RiInformationFill  size={24} className='notify'/>} 
      <span className="toast-text">{text}</span>
      <div className="toast-divider" />
      {actionText && <button className="toast-action" onClick={onAction}>{actionText}</button>}
      <button className="toast-close" onClick={onClose}><MdClose  size={24}/></button>
    </div>
  );
};

Toast.propTypes = {
  type: PropTypes.oneOf(['default', 'notification']),
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