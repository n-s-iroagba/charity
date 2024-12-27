
import { sendEmail } from '../helpers/emailHelper';
import { Donor, MockDonation } from '../models';

export const createDonor = async (donorData: any): Promise<any> => {
  const donor = await Donor.create(donorData);
  return { donor };
};

export const getAllDonors = async (): Promise<any> => {
  return await Donor.findAll();
};

export const markDonation = async (donorId: number): Promise<void> => {
  const donor = await Donor.findByPk(donorId);
  if (!donor) {
    throw new Error('Donor not found');
  }

  // Send email to donor
  await sendDonationReceivedEmail(donor);
};

export const deleteDonor = async (donorId: number): Promise<void> => {
  const donor = await Donor.findByPk(donorId);
  if (!donor) {
    throw new Error('Donor not found');
  }
  await donor.destroy();
};

export const sendCustomEmail= async (donorId: number, emailContent:any): Promise<void> => {
  const donor = await Donor.findByPk(donorId);
  if (!donor) {
    throw new Error('Donor not found');
  }
  await sendEmail(donor.email, emailContent.subject, emailContent.message);
}
export const subscribeToExtras= async (donorId: number, subscribtionContent:any): Promise<void> => {
  const donor = await Donor.findByPk(donorId);
  if (!donor) {
    throw new Error('Donor not found');
  }
   donor.subscribedToNewsletter = subscribtionContent.subscribedToNewsletter;
   donor.recurringDonations = subscribtionContent.recurringDonations;
   donor.donationsFrequency = subscribtionContent.donationsFrequency;
   await donor.save();
}
export const createBulkMockDonation =async (data:any)=>{
  const mockDonations = data.map((donation: any) => ({
    firstName: donation.firstName,
    surname: donation.surname,
    message: donation.message,
    amount: donation.amount,
  }));
  await MockDonation.bulkCreate(mockDonations);
}

export const getMockDonations = async ()=>{
  return await MockDonation.findAll();
}

const sendDonationReceivedEmail = async (donor: Donor): Promise<void> => {
  const { email, firstName, surname } = donor;
  const subject = 'Thank You for Your Donation';
  const text = `Dear ${firstName} ${surname},\n\nThank you for your generous donation. Your support helps us make a difference.\n\nBest regards,\nThe Team`;

  await sendEmail(email, subject, text);
};

