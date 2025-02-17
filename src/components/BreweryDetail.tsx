// src/components/BreweryDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBreweryDetails } from '../utils/api';
import { Card, CardContent, Typography, CircularProgress } from '@mui/material';

const BreweryDetail: React.FC = () => {
  const { id } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [brewery, setBrewery] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getBreweryDetails = async () => {
      const data = await fetchBreweryDetails(id!);
      setBrewery(data);
      setLoading(false);
    };

    getBreweryDetails();
  }, [id]);

  if (loading) return <CircularProgress />;

  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{brewery.name}</Typography>
        <Typography variant="body1">City: {brewery.city}</Typography>
        <Typography variant="body1">Type: {brewery.brewery_type}</Typography>
        <Typography variant="body2">Address: {brewery.street}, {brewery.city}</Typography>
        {/* Add other details as needed */}
      </CardContent>
    </Card>
  );
};

export default BreweryDetail;
