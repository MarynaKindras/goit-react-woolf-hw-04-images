import React, { useEffect } from 'react';
import { Overlay, ModalWin } from './Modal.styled';

export const Modal = ({ isVisible, imageUrl, alt, onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay isVisible={isVisible} onClick={handleOverlayClick}>
      <ModalWin>
        <img src={imageUrl} alt={alt} />
      </ModalWin>
    </Overlay>
  );
};
