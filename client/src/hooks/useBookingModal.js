import { useState } from 'react';

export const useBookingModalState = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedWorkspace, setSelectedWorkspace] = useState('Dedicated Desk');

  const openModal = (workspaceType = 'Dedicated Desk') => {
    setSelectedWorkspace(workspaceType);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    selectedWorkspace,
    openModal,
    closeModal,
  };
};
