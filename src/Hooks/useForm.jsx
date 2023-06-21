import { useEffect, useState } from "react";

const useForm = () => {
  const [isModalOpen, setModalOpen] = useState(true);
  const handleModalClose = () => {
    setModalOpen(false);
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setModalOpen(true);
    }, 1);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isModalOpen]);

  return { isModalOpen, setModalOpen, handleModalClose };
};

export default useForm;
