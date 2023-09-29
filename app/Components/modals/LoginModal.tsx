"use client"

import useLoginModal from '@/app/hooks/useLoginModal';
import Modal from './Modal';

interface LoginModalProps {}

const LoginModal: React.FC<LoginModalProps> = () => {
  const loginModalStatus = useLoginModal()
  const body = <p>Login</p>

  const onSubmit = () => {

  }

  return (
    <>
      <Modal
       isOpen={loginModalStatus.isOpen}
       onClose={loginModalStatus.onClose}
       title="Login"
       body={body}
       actionLabel="Continue"
       onSubmit={onSubmit}
      />
    </>
  );
};

export default LoginModal;
