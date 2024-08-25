// Modal.tsx
import React from 'react';
import './Modal.css'; // 모달 스타일을 위한 CSS 파일

interface ModalProps {
  message: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ message, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>×</span>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Modal;