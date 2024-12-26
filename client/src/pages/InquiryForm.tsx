import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const InquiryForm: React.FC = () => {
  const [subscribeNewsletter, setSubscribeNewsletter] = useState<boolean>(false);
  const [donateAgain, setDonateAgain] = useState<boolean>(false);
  const [donationPeriod, setDonationPeriod] = useState<string>(''); // Weekly or Monthly
  const [amount, setAmount] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (add actual form logic here)
    console.log({
      subscribeNewsletter,
      donateAgain,
      donationPeriod,
      amount,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* Donation Amount */}
      <Form.Group controlId="formDonationAmount">
        <Form.Label>Donation Amount</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter donation amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </Form.Group>

      {/* Newsletter Subscription */}
      <Form.Group controlId="formNewsletter">
        <Form.Check
          type="checkbox"
          label="Subscribe to our Newsletter"
          checked={subscribeNewsletter}
          onChange={() => setSubscribeNewsletter(!subscribeNewsletter)}
        />
      </Form.Group>

      {/* Donate Again */}
      <Form.Group controlId="formDonateAgain">
        <Form.Label>Would you like to donate again?</Form.Label>
        <Form.Check
          type="radio"
          label="Yes"
          name="donateAgain"
          value="yes"
          checked={donateAgain === true}
          onChange={() => setDonateAgain(true)}
        />
        <Form.Check
          type="radio"
          label="No"
          name="donateAgain"
          value="no"
          checked={donateAgain === false}
          onChange={() => setDonateAgain(false)}
        />
      </Form.Group>

      {/* Donation Period */}
      {donateAgain && (
        <Form.Group controlId="formDonationPeriod">
          <Form.Label>Select Donation Period</Form.Label>
          <Form.Check
            type="radio"
            label="Weekly"
            name="donationPeriod"
            value="weekly"
            checked={donationPeriod === 'weekly'}
            onChange={(e) => setDonationPeriod(e.target.value)}
          />
          <Form.Check
            type="radio"
            label="Monthly"
            name="donationPeriod"
            value="monthly"
            checked={donationPeriod === 'monthly'}
            onChange={(e) => setDonationPeriod(e.target.value)}
          />
        </Form.Group>
      )}

      {/* Submit Button */}
      <Button variant="primary" type="submit">
        Submit Donation
      </Button>
    </Form>
  );
};

export default InquiryForm;
