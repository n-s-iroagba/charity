import React, { useState } from 'react';
import { Button, Dropdown, DropdownButton, InputGroup, FormControl, Form, } from 'react-bootstrap';
import PaymentDetailsDisplay from './PaymentDetailsDisplay'; // Import the new component
import { registerDonor } from '../../../service/donorService';
const CryptoConvert = require("crypto-convert").default;

const convert =new CryptoConvert({
	cryptoInterval: 5000, //Crypto prices update interval in ms (default 5 seconds on Node.js & 15 seconds on Browsers)
	fiatInterval: (60 * 1e3 * 60), //Fiat prices update interval (default every 1 hour)
	calculateAverage: true, //Calculate the average crypto price from exchanges
	binance: true, //Use binance rates
	bitfinex: true, //Use bitfinex rates
	coinbase: true, //Use coinbase rates
	kraken: true, //Use kraken rates
});

const DonationForm: React.FC = () => {
  const [donationType, setDonationType] = useState<'monthly' | 'one-time'>('one-time');
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP'>('USD');
  const [pledgedAmount, setPledgedAmount] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState<'bitcoin' | 'ethereum' | 'usdt' | 'paypal' | 'cashapp'>('paypal');
  const [paymentDetails, setPaymentDetails] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [responsePaymentDetails, setResponsePaymentDetails] = useState<string | null>(null);

  // Currency symbols map
  const currencySymbols: { [key: string]: string } = {
    USD: '$',
    EUR: '€',
    GBP: '£',
  };

  const handleDonationTypeChange = (type: 'monthly' | 'one-time') => {
    setDonationType(type);
  };

  const handleCurrencyChange = (selectedCurrency: 'USD' | 'EUR' | 'GBP') => {
    setCurrency(selectedCurrency);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as unknown as number;
    setPledgedAmount(value );
  };

  const handlePaymentMethodChange = (selectedPayment: 'bitcoin' | 'ethereum' | 'usdt' | 'paypal' | 'cashapp') => {
    setPaymentMethod(selectedPayment);
    setPaymentDetails(''); // Reset payment details when the method changes
  };

  const handlePaymentDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentDetails(e.target.value);
  };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const getPaymentPlaceholder = () => {
    switch (paymentMethod) {
      case 'bitcoin':
      case 'ethereum':
      case 'usdt':
        return 'Enter your wallet address';
      case 'paypal':
        return 'Enter your PayPal email';
      case 'cashapp':
        return 'Enter your CashApp tag';
      default:
        return '';
    }
  };

  const handleSubmit = async () => {
    try {
      setSubmitted(true);  // Set a loading state or flag indicating submission
      const response = await registerDonor({
        firstName,
        email,
        lastName,
        paymentMethod,
        pledgedAmount,
        currency,
        donationType
      });
  
      setResponsePaymentDetails(response);  // Store the response in state or handle it
    } catch (error) {
      console.error(error);  // Log the error for debugging
      alert('Sorry, an error occurred');  // Notify the user about the error
    } finally {
      setSubmitted(false);  // Reset the submitted state, likely for form UX
    }
  };
  

  return (
    <div>
      {submitted && responsePaymentDetails ?   <PaymentDetailsDisplay paymentMethod={paymentMethod} paymentDetails={responsePaymentDetails} />: <>
      <Form.Group controlId="formFirstName" style={{ marginBottom: '20px' }}>
        <FormControl
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </Form.Group>
      <Form.Group controlId="formLastName" style={{ marginBottom: '20px' }}>
        <FormControl
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </Form.Group>
      <Form.Group controlId="formEmail" style={{ marginBottom: '20px' }}>
        <FormControl
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
      </Form.Group>

      {/* Donation Type Button */}
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <Button
          variant={donationType === 'one-time' ? 'primary' : 'outline-primary'}
          onClick={() => handleDonationTypeChange('one-time')}
          style={{ flex: 1, borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
        >
          One-Time
        </Button>
        <Button
          variant={donationType === 'monthly' ? 'primary' : 'outline-primary'}
          onClick={() => handleDonationTypeChange('monthly')}
          style={{ flex: 1, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
        >
          Monthly
        </Button>
      </div>

      {/* Amount and Currency Input */}
      <InputGroup style={{ marginBottom: '20px' }}>
        <InputGroup.Text>{currencySymbols[currency]}</InputGroup.Text>
        <FormControl
          type="number"
          placeholder="Enter pledgedAmount"
          value={pledgedAmount}
          onChange={handleAmountChange}
        />
        <DropdownButton
          as={InputGroup}
          variant="outline-secondary"
          title={currency}
          onSelect={(eventKey) => handleCurrencyChange(eventKey as 'USD' | 'EUR' | 'GBP')}
        >
          {convert.list.fiat.map((fiat:string, index:number) =>(
            <Dropdown.Item eventKey={fiat}>{fiat}</Dropdown.Item>
          ))
}
        </DropdownButton>
      </InputGroup>

      {/* Payment Method Dropdown */}
      <InputGroup style={{ marginBottom: '20px' }}>
        <DropdownButton
          as={InputGroup}
          variant="outline-secondary"
          title={paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1)}
          onSelect={(eventKey) =>
            handlePaymentMethodChange(eventKey as 'bitcoin' | 'ethereum' | 'usdt' | 'paypal' | 'cashapp')
          }
        >
          <Dropdown.Item eventKey="bitcoin">Bitcoin</Dropdown.Item>
          <Dropdown.Item eventKey="ethereum">Ethereum</Dropdown.Item>
          <Dropdown.Item eventKey="usdt">USDT</Dropdown.Item>
          <Dropdown.Item eventKey="paypal">PayPal</Dropdown.Item>
          <Dropdown.Item eventKey="cashapp">CashApp</Dropdown.Item>
        </DropdownButton>
        <FormControl
          type="text"
          placeholder={getPaymentPlaceholder()}
          value={paymentDetails}
          onChange={handlePaymentDetailsChange}
        />
      </InputGroup>

      {/* Submit Button */}
      <Button variant="success" onClick={handleSubmit} style={{ marginBottom: '20px' }}>
        Donate
      </Button>
</>
     
        }
    </div>
  );
};

export default DonationForm;
