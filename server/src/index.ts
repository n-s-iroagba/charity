import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database';
import donationRoutes from './routes/donation';
import cron from 'node-cron';
import { sendMail } from './utils/emailService';
import Donor from './models/Donor';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api/donations', donationRoutes);

// Sync Sequelize with the MySQL database
sequelize.sync({ force: false }).then(() => {
  console.log('Database connected and models synchronized.');
}).catch((err) => {
  console.error('Database connection failed:', err);
});

// Schedule monthly reminders
cron.schedule('0 0 1 * *', async () => {
  try {
    const monthlyDonors = await Donor.findAll({ where: { donationFrequency: 'monthly' } });

    monthlyDonors.forEach(async (donor) => {
      const mailText = `Dear ${donor.firstName}, this is a friendly reminder for your monthly donation of ${donor.donationAmount}.`;
      await sendMail(donor.email, 'Monthly Donation Reminder', mailText);
    });

    console.log('Monthly reminders sent.');
  } catch (error) {
    console.error('Error sending monthly reminders:', error);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
