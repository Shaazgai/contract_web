import React from 'react';
import { PublicFooter } from '../components/naviagtion/public_footer';
import { PublicHeader } from '../components/naviagtion/public_header';


interface PublicLayoutProps {
  children: React.ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <>
      {<PublicHeader />}
      <div className="bg-[#FBFBFB]">{children}</div>
      <PublicFooter />
    </>
  );
}
