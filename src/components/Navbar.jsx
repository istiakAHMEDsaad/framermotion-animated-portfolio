'use client';

import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from './NavLink';
import { useState } from 'react';
import { motion } from 'framer-motion';

const PoppinsFont = Poppins({
  subsets: ['latin'],
  weight: '400',
});

const NavLinks = [
  {
    url: '/',
    title: 'Home',
  },
  {
    url: '/about',
    title: 'About',
  },
  {
    url: '/portfolio',
    title: 'Portfolio',
  },
  {
    url: '/contact',
    title: 'Contact',
  },
];

const topVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: 40,
    backgroundColor: 'rgb(255,255,255)',
  },
};

const centerVariants = {
  closed: {
    opacity: 1,
  },
  opened: {
    opacity: 0,
  },
};

const bottomVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: -40,
    backgroundColor: 'rgb(255,255,255)',
  },
};

const listVariants = {
  closed: {
    x: '100vw',
  },
  opened: {
    x: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const listItemVariants = {
  closed: {
    x: -10,
    opacity: 0,
  },
  opened: {
    x: 0,
    opacity: 1,
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='h-full flex items-center justify-between px-4 ms:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
      {/* medium device navbar */}
      <div className={`hidden md:flex gap-3 w-1/3 ${PoppinsFont.className}`}>
        {NavLinks.map((item) => (
          <NavLink key={item.title} item={item} />
        ))}
      </div>

      {/* saad.dev navbar logo */}
      <div className='md:hidden lg:flex xl:justify-center xl:w-1/3'>
        <Link
          href='/'
          className='text-sm bg-neutral-950 rounded-md p-1 font-semibold flex items-center justify-center'
        >
          <span className='text-white mr-1'>Saad</span>
          <span className='w-12 h-7 rounded bg-white text-black flex items-center justify-center'>
            .dev
          </span>
        </Link>
      </div>

      {/* social logo */}
      <div className='hidden md:flex justify-end gap-3 w-1/3'>
        <Link href='https://github.com/istiakAHMEDsaad/' target='_blank'>
          <Image src='/github.png' alt='github' width={24} height={24} />
        </Link>
        <Link href='https://www.instagram.com/saad_ishigami/' target='_blank'>
          <Image src='/instagram.png' alt='instagram' width={24} height={24} />
        </Link>
        <Link href='https://www.facebook.com/istikahamed.saad' target='_blank'>
          <Image src='/facebook.png' alt='facebook' width={24} height={24} />
        </Link>
        <Link
          href='https://www.linkedin.com/in/istiakahmedsaad/'
          target='_blank'
        >
          <Image src='/linkedin.png' alt='linkedin' width={24} height={24} />
        </Link>
        <Link href='https://www.pinterest.com/istiakahmedsaad/' target='_blank'>
          <Image src='/pinterest.png' alt='pinterest' width={24} height={24} />
        </Link>
        <Link href='https://github.com/istiakAHMEDsaad/' target='_blank'>
          <Image src='/dribbble.png' alt='dribbble' width={24} height={24} />
        </Link>
      </div>

      {/* menu for small devices */}
      <div className='md:hidden'>
        {/* mobile menu button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className='w-8 h-6 flex flex-col justify-between relative z-50'
        >
          <motion.div
            variants={topVariants}
            animate={isOpen ? 'opened' : 'closed'}
            className='w-8 h-1 bg-neutral-950 rounded origin-left'
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={isOpen ? 'opened' : 'closed'}
            className='w-8 h-1 bg-neutral-950 rounded'
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={isOpen ? 'opened' : 'closed'}
            className='w-8 h-1 bg-neutral-950 rounded origin-left'
          ></motion.div>
        </button>

        {/* menu list */}
        {isOpen && (
          <motion.div
            variants={listVariants}
            initial='closed'
            animate='opened'
            className='absolute top-0 left-0 w-full h-full bg-neutral-950 text-white flex flex-col items-center justify-center gap-5 text-4xl z-40'
          >
            {NavLinks.map((item) => (
              <motion.div
                key={item.title}
                variants={listItemVariants}
                transition={{ duration: 0.5 }}
              >
                <Link href={item.url}>{item.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
