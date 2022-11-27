import React from 'react';
import AddTransactionModal from '../addTransactionModal/addTransactionModal';
<<<<<<< HEAD
import { TransactionButton } from './addTransactionButton.styled';
import { FiPlus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModalOpen } from '../../../redux/userSlice';

const AddTransactionButton = () => {
  const dispatch = useDispatch();
  const { isModalOpen } = useSelector(state => state.userInformation);

  const handleClick = () => {
    dispatch(toggleModalOpen(true));
  };
  return (
    <>
      <TransactionButton type="button" onClick={handleClick}>
        <FiPlus style={{ width: '20px', height: '20px' }} />
      </TransactionButton>
      {isModalOpen && <AddTransactionModal onCloseModal={handleClick} />}
=======
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
>>>>>>> main
    </>
  );
};

export default AddTransactionButton;
