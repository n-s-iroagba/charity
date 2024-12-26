import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/DonationButton.css'
import { useNavigate } from 'react-router-dom';

const DonationButton: React.FC<{title:string}> = ({title}) => {
  const navigate = useNavigate()
  const navigateToDonate = ()=>{
   navigate('/donate')
  }
  return (
    <Button onClick={navigateToDonate} className='donation-button' href="/donate">
      {title}
    </Button>
  );
};

export default DonationButton;
