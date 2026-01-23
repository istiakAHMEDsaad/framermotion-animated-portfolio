import { Inter, Poppins } from 'next/font/google';
import Image from 'next/image';

const InterFont = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
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
          <div className='h-80 lg:h-116 w-full relative mx-auto'>
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
              className={`text-4xl md:text-5xl font-bold ${InterFont.className}`}
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

            {/* button */}
            <div className={`w-full flex gap-4 ${PoppinsFont.className}`}>
              <button className='lg:p-3 p-2 rounded-lg ring-1 ring-black bg-neutral-950 hover:bg-neutral-900 transition-colors cursor-pointer text-white'>
                View My Work
              </button>
              <button className='lg:p-3 p-2 rounded-lg ring-1 ring-orange-950 cursor-pointer hover:bg-orange-200 transition-colors'>
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
