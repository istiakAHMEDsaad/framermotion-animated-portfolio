'use client';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';

const TransitionProvider = ({ children }) => {
  return (
    <AnimatePresence>
      <div className='h-full bg-linear-to-b from-zinc-100 to-orange-100 overflow-auto'>
        <div className='h-24'>
          <Navbar />
        </div>

        <div className='h-[calc(100vh-6rem)]'>{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
