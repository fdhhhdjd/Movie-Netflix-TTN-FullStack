import { useState } from "react";

const useRequireInput = () => {
  const emailRequire = {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
  };
  const passwordRequire = { required: true };
  return { emailRequire, passwordRequire };
};

export default useRequireInput;
