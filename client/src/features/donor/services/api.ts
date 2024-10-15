import axios from 'axios';
import { Donation } from '../types/Donation';

const API_URL = 'https://api.sportlight-humanity.com/donations';

export const submitDonation = async (donationData: Donation) => {
  return axios.post(`${API_URL}/create`, donationData);
};
