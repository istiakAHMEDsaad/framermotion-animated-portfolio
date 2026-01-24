'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Inter } from 'next/font/google';

const InterFont = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
});

const ContactPage = () => {
  const text = 'Say Hello';

  const form = useRef();

  const [formData, setFormData] = useState({
    user_message: '',
    user_email: '',
  });

  const [formError, setFormError] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setFormError('');
    setSuccess(false);
    setError(false);

    const { user_message, user_email } = formData;

    // Empty validation
    if (!user_message.trim() || !user_email.trim()) {
      setFormError('Please fill in all required fields.');
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user_email)) {
      setFormError('Please enter a valid email address.');
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY,
      )
      .then(
        () => {
          setSuccess(true);
          setFormData({ user_message: '', user_email: '' });
          form.current.reset();
        },
        () => {
          setError(true);
        },
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className='h-full flex flex-col gap-5 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        {/* TEXT CONTAINER */}
        <div className='flex-1 flex items-center justify-center xl:text-6xl md:text-5xl text-4xl'>
          <div>
            {text.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>

        {/* FORM CONTAINER */}
        <div className='flex-1 bg-red-50 rounded-xl'>
          <form
            ref={form}
            onSubmit={sendEmail}
            className={`p-12 h-full w-full flex flex-col justify-center gap-5 text-[18px] ${InterFont.className}`}
          >
            <span className='font-semibold text-3xl'>Hey Developer</span>

            <textarea
              name='user_message'
              rows={6}
              value={formData.user_message}
              onChange={handleChange}
              placeholder='Write your message here...'
              className='bg-transparent border-b-2 border-b-neutral-800 outline-none resize-none mt-4 font-light italic text-gray-500'
            />

            <span className='font-semibold text-xl'>My mail address is:</span>

            <input
              name='user_email'
              type='email'
              value={formData.user_email}
              onChange={handleChange}
              placeholder='Your email is'
              className='bg-transparent border-b-2 border-b-neutral-800 outline-none font-light italic text-gray-500'
            />

            <span className='font-semibold text-xl'>Regards</span>

            <button
              type='submit'
              disabled={isSending}
              className={`rounded font-semibold p-4 transition-colors
                ${
                  isSending
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-purple-300/80 hover:bg-purple-300 cursor-pointer'
                }
              `}
            >
              {isSending ? 'Sending...' : 'Send'}
            </button>

            {/* VALIDATION ERROR */}
            {formError && (
              <span className='text-red-600 font-semibold'>{formError}</span>
            )}

            {/* EMAILJS STATUS */}
            {success && (
              <span className='text-green-600 font-semibold'>
                Your message has been sent successfully!
              </span>
            )}

            {error && (
              <span className='text-red-600 font-semibold'>
                Something went wrong. Please try again.
              </span>
            )}
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
