// src/components/BreweryList.tsx
import React from 'react';
import BreweryCard from './BreweryCard';
import { Grid } from '@mui/material';

interface Brewery {
  id: string;
  name: string;
  city: string;
  type: string;
}

interface BreweryListProps {
  breweries: Brewery[];
}

const BreweryList: React.FC<BreweryListProps> = ({ breweries }) => {
  return (
    <Grid container spacing={3}>
      {breweries.map((brewery) => (
        <Grid item xs={12} sm={6} md={4} key={brewery.id}>
          <BreweryCard {...brewery} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BreweryList;
