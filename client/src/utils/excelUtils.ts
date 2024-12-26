import * as XLSX from 'xlsx';
import { CreateMockDonation } from '../types/MockDonation';

export const parseExcelFile = (file: File): Promise<CreateMockDonation[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target?.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];  // Getting the first sheet
      const donorsData = XLSX.utils.sheet_to_json(sheet);

      // Format donors data into the required structure
      const formattedDonors = donorsData.map((donor: any) => ({
        firstName: donor.firstName,
        lastName: donor.lastName,
        message: donor.message,
        amount: donor.amount,
      }));

      resolve(formattedDonors);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsBinaryString(file);
  });
};
