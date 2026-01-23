import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import TransitionProvider from '@/components/TransitionProvider';

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
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
