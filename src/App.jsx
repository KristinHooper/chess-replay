import React from 'react';
import TestButton from '@/components/TestButton';

const App = () => {
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold'>ShadCN and Tailwind Test</h1>
      <div className='space-y-4'>
        <div className='p-4'>
          <TestButton />
        </div>
      </div>
    </div>
  );
};

export default App;
