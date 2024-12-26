
  
  export type CreateMockDonation ={
    firstName: string;
    lastName: string;
    message: string;
    amount: number;
  }
  
export type MockDonation =CreateMockDonation &{
    id: number;
}