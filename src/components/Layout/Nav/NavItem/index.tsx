import React, { ReactNode } from 'react';
import Link from 'next/link';

type NavItemProps = {
  href: string;
  name: string;
};

const NavItem = ({ href, name }: NavItemProps) => {
  return (
    <Link href={href}>
      <a className="text-heading-4 text-gray-70 font-label font-bold">{name}</a>
    </Link>
  );
};

export default NavItem;