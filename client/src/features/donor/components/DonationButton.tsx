import React from 'react';
import { Button } from 'react-bootstrap';

const DonationButton: React.FC = () => {
  return (
    <Button variant="primary" href="/donate">
      Donate Now
    </Button>
  );
};

export default DonationButton;
