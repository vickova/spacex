import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className='space__logo'>
        <h2>Space</h2>
        <Image src='/spacex-logo.svg' width={20} height={20} alt='spacex__logo'/>
      </div>
      <Link href='/'>Home</Link>
      <Link href='/upcoming'>Upcoming Capsules</Link>
      <Link href='/past'>Past Capsules</Link>
    </nav>
  )
}

export default Navbar