import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[200] bg-black flex flex-center justify-center items-center">
      <div className="text-center">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-20 h-20 border-4 border-primary border-t-transparent rounded-full mb-6 mx-auto"
        />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          className="text-2xl font-black italic tracking-tighter text-white"
        >
          TITAN<span className="text-primary">FITNESS</span>
        </motion.span>
      </div>
    </div>
  );
};

export default Loading;
