'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.url}
      className={`rounded text-base px-2 py-1 ${pathname === item.url && 'bg-neutral-950 text-white'}`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
