// src/components/Search.tsx
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div>
      <TextField 
        label="Search Breweries" 
        variant="outlined" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <Button onClick={handleSearch} variant="contained">Search</Button>
    </div>
  );
};

export default Search;
