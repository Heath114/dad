// src/app/components/FadeUp.jsx
'use client'
import { motion } from 'framer-motion';

const FadeUp = ({
  children,
  delay = 0,
  duration = 0.8,
  distance = 30,
  exitDuration = 0.2,
  className = "",
  ...props
}) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: distance, 
      pointerEvents: 'none' 
    },
    visible: {
      opacity: 1,
      y: 0,
      pointerEvents: 'auto',
      transition: { 
        duration, 
        delay: 0.4 + delay,
        ease: 'easeOut' 
      }
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }} // Triggers 100px before element enters viewport
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
