import React from 'react';
import AddTransactionModal from '../addTransactionModal/addTransactionModal';
import { useState } from 'react';
import { TransactionButton } from './addTransactionButton.styled';
import { FiPlus } from 'react-icons/fi';

const AddTransactionButton = () => {
  const [showModal, setShowModal] = useState(false);

  const onToggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <TransactionButton type="button" onClick={onToggleModal}>
        <FiPlus style={{ width: '20px', height: '20px' }} />
      </TransactionButton>
      {showModal === true && (
        <AddTransactionModal onCloseModal={onToggleModal} />
      )}
    </>
  );
};

export default AddTransactionButton;
