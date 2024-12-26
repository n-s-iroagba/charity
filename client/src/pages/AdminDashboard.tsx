import React, { useEffect, useState } from 'react';
import { Accordion, Button, Modal, Form } from 'react-bootstrap';
import { deleteDonor, getAllDonors, payDonorPledge, sendDonorEmail, uploadMockDonations } from '../services/adminService';
import { parseExcelFile } from '../utils/excelUtils';
import { Donor } from '../types/Donor';

const AdminDashboard: React.FC = () => {
  const [donorsList, setDonorsList] = useState<Donor[]>([]);
  const [showPledgeForm, setShowPledgeForm] = useState<boolean>(false);
  const [showMailForm, setShowMailForm] = useState<boolean>(false);
  const [selectedDonor, setSelectedDonor] = useState<Donor | null>(null);
  const [emailSubject, setEmailSubject] = useState<string>('');
  const [emailMessage, setEmailMessage] = useState<string>('');
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [showDeleteDonorForm, setShowDeleteDonorForm] = useState(false);
  const [adminCode, setAdminCode] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);

  // Fetch all donors when the component mounts
  useEffect(() => {
    const fetchDonors = async () => {
      const donors = await getAllDonors();
      setDonorsList(donors);
    };
    fetchDonors();
  }, []);

  const handleDeleteDonor = async (donorId: number) => {
    if (adminCode === 'admin123') {  // Simple admin code check
      await deleteDonor(donorId);
      setDonorsList(donorsList.filter(donor => donor.id !== donorId));
      setShowDeleteDonorForm(false);
    } else {
      alert('Invalid admin code!');
    }
  };

  const handleSendMail = async () => {
    if (selectedDonor) {
      await sendDonorEmail(selectedDonor.id, { subject: emailSubject, message: emailMessage });
      setShowMailForm(false);
    }
  };

  const handlePayPledge = async () => {
    if (selectedDonor) {
      await payDonorPledge(selectedDonor.id, paymentAmount);
      setDonorsList(donorsList.map(donor =>
        donor.id === selectedDonor.id ? { ...donor, paidAmount: donor.pledgedAmount + paymentAmount } : donor
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

  // Handle file upload and parse the Excel file
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const donations = await parseExcelFile(file);
  
        await uploadMockDonations(donations);  // Upload donations to the backend
        setShowUploadModal(false);
      } catch (error) {
        alert('Error uploading file');
      }
    }
  };

  return (
    <div className='d-flex flex-column align-items-center'>
      <h2 className='my-5'>Admin Dashboard - Donors List</h2>
      <Button variant="primary" onClick={() => setShowUploadModal(true)}>
        Upload Batch Donations
      </Button>
      {/* Render Donors List */}
      <Accordion className='mt-5'>
        {donorsList.length ? donorsList.map((donor) => (
          <Accordion.Item eventKey={donor.id.toString()} key={donor.id}>
            <Accordion.Header>{donor.firstName} {donor.lastName}</Accordion.Header>
            <Accordion.Body>
              <p>Pledged Amount: ${donor.pledgedAmount}</p>
              <p>Paid Amount: ${donor.paidAmount}</p>
              <Button variant="success" onClick={() => openPayPledgeForm(donor)}>
                Pay Pledge
              </Button>{' '}
              <Button variant="info" onClick={() => handleShowMailForm(donor)}>
                Send Mail
              </Button>{' '}
              <Button variant="danger" onClick={() => setShowDeleteDonorForm(true)}>
                Delete
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        )) : <h4>No Donors yet</h4>}
      </Accordion>

      {/* Upload Modal */}
      <Modal show={showUploadModal} onHide={() => setShowUploadModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Mock Donations</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="donationFile">
            <Form.Label>Excel File</Form.Label>
            <Form.Control type="file" onChange={handleFileUpload} />
          </Form.Group>
        </Modal.Body>
      </Modal>

      {/* Send Email Modal */}
      <Modal show={showMailForm} onHide={() => setShowMailForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Send Email to {selectedDonor?.firstName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="emailSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" value={emailSubject} onChange={(e) => setEmailSubject(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="emailMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} value={emailMessage} onChange={(e) => setEmailMessage(e.target.value)} />
          </Form.Group>
          <Button variant="primary" onClick={handleSendMail}>Send</Button>
        </Modal.Body>
      </Modal>
      
      {/* Pledge Modal */}
      <Modal show={showPledgeForm} onHide={handlePledgeFormClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pay Pledge to {selectedDonor?.firstName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="paymentAmount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(Number(e.target.value))}
            />
          </Form.Group>
          <Button variant="primary" onClick={handlePayPledge}>Pay</Button>
        </Modal.Body>
      </Modal>

      {/* Delete Donor Form */}
      <Modal show={showDeleteDonorForm} onHide={() => setShowDeleteDonorForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Donor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="adminCode">
            <Form.Label>Admin Code</Form.Label>
            <Form.Control type="text" value={adminCode} onChange={(e) => setAdminCode(e.target.value)} />
          </Form.Group>
          <Button variant="danger" onClick={() => handleDeleteDonor(selectedDonor!.id)}>Delete</Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AdminDashboard;
