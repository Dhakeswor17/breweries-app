// src/App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import { fetchBreweries } from './utils/api';
import BreweryList from './components/BreweryList';
import BreweryDetail from './components/BreweryDetail';
import Search from './components/Search';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  const [breweries, setBreweries] = useState<[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const getBreweries = async () => {
      const data = await fetchBreweries(searchQuery);
      setBreweries(data);
    };

    getBreweries();
  }, [searchQuery]);

  return (
    <Router>
      <Container>
        <Typography variant="h3" gutterBottom>
          Breweries App
        </Typography>
        <Search onSearch={setSearchQuery} />
        <Routes>
          <Route path="/" element={<BreweryList breweries={breweries} />} />
          <Route path="/brewery/:id" element={<BreweryDetail />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
