import { Inter, Poppins } from 'next/font/google';
import Image from 'next/image';

const InterFont = Inter({
  subsets: ['latin'],
  weight: '400',
});
const PoppinsFont = Poppins({
  subsets: ['latin'],
  weight: '400',
});

export default function Home() {
  return (
    <div className='h-full flex flex-col lg:flex-row px-4 ms:px-8 md:px-12 lg:px-20 xl:px-48'>
      <div className='flex flex-col md:flex-col lg:flex-row'>
        {/* image container */}
        <div className='lg:flex-1 h-full w-full'>
          <div className='h-80 lg:h-110 w-full relative mx-auto'>
            <Image
              src='/hero-image.png'
              fill
              alt=''
              className='object-contain'
            />
          </div>
        </div>

        {/* text container */}
        <div className='lg:flex-1 mt-6 lg:mt-0 lg:pt-8'>
          <div className='flex flex-col items-center justify-center w-full gap-6'>
            {/* title */}
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold ${InterFont.className}`}
            >
              Crafting Digital Experiences, Designing Tomorrow.
            </h1>

            {/* description */}
            <p className={`md:text-xl ${PoppinsFont.className}`}>
              Welcome to my digital canvas, where innovation and creativity
              converge. With a keen eye for aesthetics and a mastery of code, my
              portfolio showcases a diverse collection of projects that reflect
              my commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
