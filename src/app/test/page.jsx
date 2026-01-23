'use client';
import { hover, motion } from 'framer-motion';

export default function Test() {
  const variants = {
    variable1: {
      x: 100,
      y: 200,
      opacity: 0.1,
    },
    variable2: {
      x: 500,
      y: -200,
      opacity: 0.1,
    },
  };

  return (
    <div className='px-4 ms:px-8 md:px-12 lg:px-20 xl:px-48'>
      {/* container */}
      <div className='h-[calc(100vh-6rem)] flex flex-col items-center justify-center'>
        <motion.div
          initial={{ x: 0 }}
          variants={variants}
          animate='variable2'
          transition={{duration: 2}}
          className='h-40 w-40 bg-rose-400 rounded'
        ></motion.div>
      </div>
    </div>
  );
}
