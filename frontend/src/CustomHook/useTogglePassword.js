import React, { useEffect, useState } from "react";

const useTogglePassword = () => {
  const [isLock, setIsLock] = useState(false);
  const [isLockConfirm, setIsLockConfirm] = useState(false);
  const handleIsLock = () => {
    setIsLock(!isLock);
  };
  const handleIsLockConfirm = () => {
    setIsLockConfirm(!isLockConfirm);
  };
  return { handleIsLock, isLock, isLockConfirm, handleIsLockConfirm };
};

export default useTogglePassword;
