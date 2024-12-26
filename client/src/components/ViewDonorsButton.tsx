import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/DonationButton.css'
import { useNavigate } from 'react-router-dom';

const ViewDonorsButton: React.FC = () => {
  const navigate = useNavigate()
  const navigateToDonate = ()=>{
   navigate('/donors')
  }
  return (
    <Button onClick={navigateToDonate} className='donation-button'>
      View Our Donors
    </Button>
  );
};

export default ViewDonorsButton;
