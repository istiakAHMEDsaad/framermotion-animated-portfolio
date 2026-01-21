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
    <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 max-sm:gap-y-6'>
      {/* Image Container h-1/2 lg:h-full lg:w-1/2 */}
      <div className='h-72 w-72 relative'>
        <Image
          src='/hero-image.png'
          alt='hero image'
          fill
          className='object-contain'
        />
      </div>

      {/* Text Container */}
      <div
        className={`h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center`}
      >
        {/* title */}
        <h1 className={`text-4xl md:text-6xl font-bold ${InterFont.className}`}>
          Crafting Digital Experiences, Designing Tomorrow.
        </h1>
        {/* description */}
        <p className={`md:text-xl ${PoppinsFont.className}`}>
          Welcome to my digital canvas, where innovation and creativity
          converge. With a keen eye for aesthetics and a mastery of code, my
          portfolio showcases a diverse collection of projects that reflect my
          commitment to excellence.
        </p>
      </div>
    </div>
  );
}
