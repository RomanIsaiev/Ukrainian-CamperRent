import { useEffect } from "react";
import { BackDrop, Modal } from "../ModalWindow/ModalWindow.styled";

export const ModalWindow = ({ isOpen, onClose, children }) => {
  const onBackDropClick = (evt) => {
    if (evt.currentTarget === evt.target) onClose();
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyPress);
      document.body.classList.add("disable-scroll");
    }
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.body.classList.remove("disable-scroll");
    };
  }, [isOpen, onClose]);
  if (!isOpen) {
    return null;
  }

  return (
    <>
      {isOpen && (
        <BackDrop onClick={onBackDropClick}>
          <Modal>{children}</Modal>
        </BackDrop>
      )}
    </>
  );
};
