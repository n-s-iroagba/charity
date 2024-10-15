import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/FeedButton.css'

const FeedButton: React.FC = () => {
  return (
    <Button className="feed-button" variant="primary" href="/donate">
      Feed a Life
    </Button>
  );
};

export default FeedButton;

