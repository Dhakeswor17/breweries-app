// src/components/BreweryCard.tsx
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface BreweryCardProps {
  id: string;
  name: string;
  city: string;
  type: string;
}

const BreweryCard: React.FC<BreweryCardProps> = ({ id, name, city, type }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">City: {city}</Typography>
        <Typography variant="body2">Type: {type}</Typography>
        <Button component={Link} to={`/brewery/${id}`} variant="contained">View Details</Button>
      </CardContent>
    </Card>
  );
};

export default BreweryCard;
