import { useContext } from 'react';
import { ModalContext } from '@app/contexts';

const useModal = () => useContext(ModalContext);

export default useModal;
