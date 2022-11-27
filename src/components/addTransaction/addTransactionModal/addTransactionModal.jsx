import React, { Fragment } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import AddTransactionForm from '../addTransactionForm/addTransactionForm';
import { Backdrop, Modal, CloseButton } from './addTransactionModal.styled';
import { VscChromeClose } from 'react-icons/vsc';
import Media from 'react-media';
<<<<<<< HEAD
import { useDispatch } from 'react-redux';
import { toggleModalOpen } from '../../../redux/userSlice';

const modalRoot = document.querySelector('#modal-root');

const AddTransactionModal = () => {
  const dispatch = useDispatch();

=======

const modalRoot = document.querySelector('#modal-root');

const AddTransactionModal = ({ onCloseModal }) => {
>>>>>>> main
  useEffect(() => {
    window.addEventListener('keydown', onEscapeClose);
    return () => {
      window.removeEventListener('keydown', onEscapeClose);
    };
  });
<<<<<<< HEAD
  const handleModalClose = () => dispatch(toggleModalOpen(false));

  const onEscapeClose = e => {
    if (e.code === 'Escape') {
      dispatch(toggleModalOpen(false));
    }
  };
  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      dispatch(toggleModalOpen(false));
    }
  };
  return createPortal(
    <Backdrop onClick={onBackdropClick}>
=======

  const onEscapeClose = e => {
    if (e.code === 'Escape') {
      onCloseModal();
    }
  };
  return createPortal(
    <Backdrop>
>>>>>>> main
      <Modal>
        <Media
          queries={{
            small: '(max-width: 767px)',
            medium: '(min-width: 768px) and (max-width: 1199px)',
            large: '(min-width: 1280px)',
          }}
        >
          {matches => (
            <Fragment>
              {/* {matches.small && <p>I am small!</p>} */}
              {matches.medium && (
<<<<<<< HEAD
                <CloseButton type="button" onClick={handleModalClose}>
=======
                <CloseButton type="button" onClick={onCloseModal}>
>>>>>>> main
                  <VscChromeClose style={{ width: '16px', height: '16px' }} />
                </CloseButton>
              )}
              {matches.large && (
<<<<<<< HEAD
                <CloseButton type="button" onClick={handleModalClose}>
=======
                <CloseButton type="button" onClick={onCloseModal}>
>>>>>>> main
                  <VscChromeClose style={{ width: '16px', height: '16px' }} />
                </CloseButton>
              )}
            </Fragment>
          )}
        </Media>

<<<<<<< HEAD
        <AddTransactionForm onCancel={handleModalClose} />
=======
        <AddTransactionForm onCancel={onCloseModal} />
>>>>>>> main
      </Modal>
    </Backdrop>,
    modalRoot
  );
};

export default AddTransactionModal;
