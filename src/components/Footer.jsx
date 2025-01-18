import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-200 text-gray-700 py-4'>
      <div className='container mx-auto text-center'>
        © {new Date().getFullYear()} Chess Replay. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
