export const validateDonationInput = (input: any): boolean => {
    const requiredFields = ['firstName', 'surname', 'amount', 'email'];
    return requiredFields.every(field => field in input);
  };
  