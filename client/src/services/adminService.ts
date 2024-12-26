import axios from 'axios';
import { CreateMockDonation } from '../types/MockDonation';

const API_URL = 'http://your-api-endpoint/api';  // Adjust the API URL accordingly

// Function to get all donors
export const getAllDonors = async () => {
  try {
    const response = await axios.get(`${API_URL}/donors`);
    return response.data;
  } catch (error) {
    console.error('Error fetching donors', error);
    throw error;
  }
};

// Function to delete a donor
export const deleteDonor = async (donorId: number) => {
  try {
    const response = await axios.delete(`${API_URL}/donors/${donorId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting donor', error);
    throw error;
  }
};

// Function to pay a donor's pledge
export const payDonorPledge = async (donorId: number, paymentAmount: number) => {
  try {
    const response = await axios.post(`${API_URL}/donors/pay`, {
      donorId,
      paymentAmount,
    });
    return response.data;
  } catch (error) {
    console.error('Error paying donor pledge', error);
    throw error;
  }
};

// Function to send an email to a donor
export const sendDonorEmail = async (donorId: number, emailData: { subject: string, message: string }) => {
  try {
    const response = await axios.post(`${API_URL}/donors/${donorId}/send-email`, emailData);
    return response.data;
  } catch (error) {
    console.error('Error sending email', error);
    throw error;
  }
};

// Function to upload mock donations (batch processing)
export const uploadMockDonations = async (donations: CreateMockDonation[]) => {
  try {
    const response = await axios.post(`${API_URL}/donations/upload`, donations);
    return response.data;
  } catch (error) {
    console.error('Error uploading mock donations', error);
    throw error;
  }
};
