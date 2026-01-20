import Image from 'next/image';
import Link from 'next/link';
import IconImg from '@/app/icon.png';

export default function Navbar() {
  return (
    <div className='h-full flex items-center justify-between px-4 ms:px-8 md:px-12 lg:px-20 xl:px-48'>
      {/* logo */}
      <div className=''>
        <Link
          href='/'
          className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'
        >
          <span className='text-white mr-1'>Dev</span>
          <span className='w-12 h-8 rounded bg-white text-black flex items-center justify-center'>
            <div className='relative h-8 w-8'>
              <Image
                src={IconImg}
                alt='icon'
                fill
                className='rounded-full object-cover'
              />
            </div>
          </span>
        </Link>
      </div>

      {/* responsive menu */}
      <div>nav2</div>
    </div>
  );
}
