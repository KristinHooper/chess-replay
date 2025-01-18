import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

const Header = () => {
  return (
    <header className='bg-gray-100 text-gray-900 shadow'>
      {/* Top Navigation Bar */}
      <div className='container mx-auto flex items-center py-4 px-4'>
        {/* Icon */}
        <div className='flex items-center'>
          <Link to='/'>
            <img
              src='/chessReplay-logo.svg'
              alt='Chess Icon'
              className='h-36 w-36'
            />
          </Link>
        </div>

        {/* Title */}
        <h1 className='flex-1 text-4xl font-bold text-center leading-none'>
          <Link to='/'>CHESSREPLAY</Link>
        </h1>

        {/* Login Button with Padding */}
        <div className='pr-36'>
          {' '}
          {/* Padding matches the icon size */}
          <Button className='bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark'>
            Login
          </Button>
        </div>
      </div>

      {/* Horizontal Menu */}
      <nav className='bg-gray-200 text-gray-700 py-2'>
        <ul className='flex justify-center gap-4'>
          <li>
            <Link
              to='/watch'
              className='hover:text-blue-500 px-3 py-2 rounded-lg'
            >
              Watch
            </Link>
          </li>
          <li>
            <Link
              to='/search'
              className='hover:text-blue-500 px-3 py-2 rounded-lg'
            >
              Search The Database
            </Link>
          </li>
          <li>
            <Link
              to='/faq'
              className='hover:text-blue-500 px-3 py-2 rounded-lg'
            >
              FAQ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
