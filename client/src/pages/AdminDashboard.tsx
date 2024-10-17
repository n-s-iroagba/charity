import React, { useEffect, useState } from 'react';
import { Accordion, Button, Modal, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faEnvelope, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Donor } from './types/Donor';
import { deleteDonor, getAllDonors, payDonorPledge, sendDonorEmail } from '../service/donorService';

const AdminDashboard: React.FC = () => {
  const [donorsList, setDonorsList] = useState<Donor[]>([]);
  const [showPledgeForm, setShowPledgeForm] = useState<boolean>(false);
  const [showMailForm, setShowMailForm] = useState<boolean>(false);
  const [selectedDonor, setSelectedDonor] = useState<Donor | null>(null);
  const [emailSubject, setEmailSubject] = useState<string>('');
  const [emailMessage, setEmailMessage] = useState<string>('');
  const [paymentAmount, setPaymentAmount] = useState(0)
  const [showDeleteDonorForm, setShowDeleteDonorForm] = useState(false);
  const [adminCode, setAdminCode] = useState('')

  // Fetch all donors when the component mounts
  useEffect(() => {
    const fetchDonors = async () => {
      const donors = await getAllDonors();
      setDonorsList(donors);
    };
    fetchDonors();
  }, []);

  const handleDeleteDonor = async (donorId: number) => {
    await deleteDonor(donorId);
    setDonorsList(donorsList.filter(donor => donor.id !== donorId));
  };

  const handleSendMail = async () => {
    if (selectedDonor) {
      await sendDonorEmail(selectedDonor.id, {
        subject: emailSubject,
        message: emailMessage,
      });
      setShowMailForm(false);
    }
  };


  const handlePayPledge = async () => {
    if (selectedDonor) {
      await payDonorPledge(selectedDonor.id, paymentAmount);
      // Update donor's payment info locally
      setDonorsList(donorsList.map(donor => 
        donor.id === selectedDonor.id 
          ? { ...donor, paidAmount: donor.paidAmount + paymentAmount } 
          : donor
      ));
      setShowPledgeForm(false);
    }
  };

  const openPayPledgeForm = (donor: Donor) => {
    setSelectedDonor(donor);
    setShowPledgeForm(true);
  };

  const handleShowMailForm = (donor: Donor) => {
    setSelectedDonor(donor);
    setShowMailForm(true);
  };

  const handlePledgeFormClose = () => setShowPledgeForm(false);
 

  return (
    <div>
      <h2>Admin Dashboard - Donors List</h2>
      <Accordion>
        {donorsList.map((donor) => (
          <Accordion.Item eventKey={donor.id.toString()} key={donor.id}>
            <Accordion.Header>{donor.firstName} {donor.lastName}</Accordion.Header>
            <Accordion.Body>
              <p>Pledged Amount: ${donor.pledgedAmount}</p>
              <p>Paid Amount: ${donor.paidAmount}</p>
              <Button variant="success" onClick={() => openPayPledgeForm(donor)}>
                <FontAwesomeIcon icon={faMoneyBill} /> Pay Pledge
              </Button>{' '}
              <Button variant="info" onClick={() => handleShowMailForm(donor)}>
                <FontAwesomeIcon icon={faEnvelope} /> Send Mail
              </Button>{' '}
              <Button variant="danger" onClick={() => handleDeleteDonor(donor.id)}>
                <FontAwesomeIcon icon={faTrash} /> Delete
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>


      {/* Pay Pledge Modal */}
      <Modal show={showPledgeForm} onHide={handlePledgeFormClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pay Pledge for {selectedDonor?.firstName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formPledgeAmount">
              <Form.Label>Pledged Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter amount to pay"
                value={selectedDonor?.pledgedAmount}
                onChange={(e)=>setPaymentAmount(+e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePledgeFormClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlePayPledge}>
            Pay
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Send Mail Modal */}
      <Modal show={showMailForm} onHide={() => setShowMailForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Send Mail to {selectedDonor?.firstName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEmailSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email subject"
                value={emailSubject}
                onChange={(e) => setEmailSubject(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formEmailBody">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
                value={emailMessage}
                onChange={(e) => setEmailMessage(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowMailForm(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSendMail}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Send Mail Modal */}

      {selectedDonor&&
      <Modal show={showDeleteDonorForm} onHide={() => setShowDeleteDonorForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Donor {selectedDonor?.firstName + '  '+selectedDonor?.lastName }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEmailSubject">
              <Form.Label>Enter Admin Code</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter admin Code"
                value={adminCode}
                onChange={(e) => setAdminCode(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteDonorForm(false)}>
            Close
          </Button>
          <Button variant="danger" onClick={()=>handleDeleteDonor(selectedDonor.id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
}
    </div>

  );
};

export default AdminDashboard;
