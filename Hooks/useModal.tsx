import React, { useContext, useState } from 'react';
import { ModalContext } from '../Context/ModalProvider';

const useModal = () => {
    const [modalIsOpen,setModalIsOpen] = useContext(ModalContext)
    return { modalIsOpen, setModalIsOpen }
};

export default useModal;
