import React from 'react';
import { motion } from 'framer-motion';


const Modal = ({ image, setImage }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setImage(null);
    }
  };

  return (
    <motion.div className='backdrop' onClick={handleClick}
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    >
      <motion.img src={image} alt='pic'
      initial={{ y: '-100vh'}}
      animate={{ y: 0}}
       />
    </motion.div>
  );
};

export default Modal;
