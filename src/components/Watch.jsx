import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '@/pages/Landing';
import Watch from '@/pages/Watch';
import SearchDatabase from '@/pages/SearchDatabase';
import FAQ from '@/pages/FAQ';
import Header from '@/components/Header';

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/watch' element={<Watch />} />
        <Route path='/search' element={<SearchDatabase />} />
        <Route path='/faq' element={<FAQ />} />
      </Routes>
    </Router>
  );
};

export default App;
