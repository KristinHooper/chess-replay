<header className='bg-gray-100 text-gray-900 shadow'>
  <div className='container mx-auto flex items-center justify-between py-4 px-4'>
    <img src='/public/chessReplay-logo.svg' alt='Icon' className='h-8 w-8' />
    <h1 className='text-lg font-bold'>CHESS REPLAY</h1>
    <Button isPrimary>Login</Button>
  </div>

  <nav className='bg-gray-200 text-gray-700 py-2'>
    <ul className='flex justify-center gap-4'>
      <li>
        <a href='/watch' className='hover:text-blue-500'>
          Watch
        </a>
      </li>
      <li>
        <a href='/search' className='hover:text-blue-500'>
          Search Database
        </a>
      </li>
      <li>
        <a href='/faq' className='hover:text-blue-500'>
          FAQ
        </a>
      </li>
    </ul>
  </nav>
</header>;
