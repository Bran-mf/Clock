import React, { createContext, useState } from 'react';

export const ModalContext = createContext<any>([]);

interface ModalProviderProps {
    children: JSX.Element;
}
export const ModaProvider = ({ children }: ModalProviderProps) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return <ModalContext.Provider value={[modalIsOpen, setModalIsOpen]}>{children}</ModalContext.Provider>;
};
