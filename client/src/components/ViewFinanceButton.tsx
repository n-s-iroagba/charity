import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/DonationButton.css'
import { useNavigate } from 'react-router-dom';

const ViewFinanceButton: React.FC = () => {
  const navigate = useNavigate()
  const navigateToDonate = ()=>{
   navigate('/expenses')
  }
  return (
    <Button onClick={navigateToDonate} className='donation-button' >
    Financial Summary
    </Button>
  );
};

export default ViewFinanceButton;
