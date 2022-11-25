import React, { Fragment } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import AddTransactionForm from '../addTransactionForm/addTransactionForm';
import { Backdrop, Modal, CloseButton } from './addTransactionModal.styled';
import { VscChromeClose } from 'react-icons/vsc';
import Media from 'react-media';

const modalRoot = document.querySelector('#modal-root');

const AddTransactionModal = ({ onCloseModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', onEscapeClose);
    return () => {
      window.removeEventListener('keydown', onEscapeClose);
    };
  });

  const onEscapeClose = e => {
    console.log('press');

    if (e.code === 'Escape') {
      onCloseModal();
    }
  };
  return createPortal(
    <Backdrop>
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
                <CloseButton type="button" onClick={onCloseModal}>
                  <VscChromeClose style={{ width: '16px', height: '16px' }} />
                </CloseButton>
              )}
              {matches.large && (
                <CloseButton type="button" onClick={onCloseModal}>
                  <VscChromeClose style={{ width: '16px', height: '16px' }} />
                </CloseButton>
              )}
            </Fragment>
          )}
        </Media>

        <AddTransactionForm onCancel={onCloseModal} />
      </Modal>
    </Backdrop>,
    modalRoot
  );
};

export default AddTransactionModal;
