import React from 'react';
import { Card } from 'react-bootstrap';

interface PaymentDetailsDisplayProps {
  paymentMethod: string;
  paymentDetails: string;
}

const PaymentDetailsDisplay: React.FC<PaymentDetailsDisplayProps> = ({ paymentMethod, paymentDetails }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Payment Information</Card.Title>
        <Card.Text>
          {paymentMethod === 'paypal' && (
            <>
              <strong>PayPal Email: </strong>
              {paymentDetails}
            </>
          )}
          {paymentMethod === 'cashapp' && (
            <>
              <strong>CashApp Tag: </strong>
              {paymentDetails}
            </>
          )}
          {(paymentMethod === 'bitcoin' || paymentMethod === 'ethereum' || paymentMethod === 'usdt') && (
            <>
              <strong>Wallet Address: </strong>
              {paymentDetails}
            </>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PaymentDetailsDisplay;
