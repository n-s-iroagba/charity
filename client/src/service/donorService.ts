import { Donor } from "../pages/types/Donor";
import api from "../utils/api";

;

// Register a new donor
export const registerDonor = async (donorData: Partial<Donor>) => {
  const response = await api.post('/donors', donorData);
  return response.data;
};

// Get all donors
export const getAllDonors = async () => {
  const response = await api.get('/donors');
  return response.data;
};

// Delete a donor by ID
export const deleteDonor = async (donorId: number) => {
  const response = await api.delete(`/donors/${donorId}`);
  return response.data;
};

// Send an email to a donor
export const sendDonorEmail = async (donorId: number, emailData: { subject: string; message: string }) => {
  const response = await api.post(`/donors/${donorId}/send-email`, emailData);
  return response.data;
};

export const payDonorPledge = async (donorId: number, amount: number) => {
  const response = await api.post(`/donors/${donorId}/pay-pledge`, { amount });
  return response.data;
};
