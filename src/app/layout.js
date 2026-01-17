import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Animated Portfolio',
  description:
    'This portfolio is created by nextjs with react framermotion, where smoothness is our main goal 😊',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className='h-screen w-screen bg-linear-to-b from-blue-100 to-red-100'>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
