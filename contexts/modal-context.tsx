'use client';
import { Contact } from '@app/types';
import React, { createContext, useContext, useState } from 'react';

interface ModalContextProps {
  isOpen: boolean;
  toggle: (contactData?: Contact) => void;
  contact?: Contact;
}

export const ModalContext = createContext<ModalContextProps | undefined>(
  undefined
);

interface ProviderProps {
  children: React.ReactNode;
}

const ModalProvider = ({ children }: ProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [contact, setContact] = useState<Contact>();

  const toggle = (contactData?: Contact): void => {
    if (contactData) {
      setContact(contactData);
    }
    setIsOpen((prevState: boolean) => !prevState);
  };

  return (
    <ModalContext.Provider value={{ isOpen, toggle, contact }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
