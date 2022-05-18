const useMotionStyle = () => {
  const modalVariants = {
    hidden: {
      scale: 0,
    },

    visible: {
      scale: 1,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 100,
      },
    },
  };
  return {
    modalVariants,
  };
};

export default useMotionStyle;
