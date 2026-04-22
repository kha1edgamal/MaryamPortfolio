import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import CaseStudyAllEmployees from './pages/case-studies/AllEmployeesAreMarketers/index';
import Loader from './components/Loader';
import SharedLayout from './components/SharedLayout';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loader for 1.8 seconds before dismissing
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Loader isLoading={isLoading} />
      <SharedLayout>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/AllEmployeesAreMarketers" element={<CaseStudyAllEmployees />} />
        </Routes>
      </SharedLayout>
    </BrowserRouter>
  );
}

export default App;
