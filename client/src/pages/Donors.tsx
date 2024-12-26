import React, { useEffect, useState } from "react";
import { Table, Container, Button, Dropdown } from "react-bootstrap";

type Donor = {
  id: number;
  name: string;
  amount: number;
  message: string;
  date: string;
};

const DonorPage: React.FC = () => {
  const [donors, setDonors] = useState<Donor[]>([]);
  const [sortedDonors, setSortedDonors] = useState<Donor[]>([]);
  const [sortCriteria, setSortCriteria] = useState<"name" | "amount">("name");

  useEffect(() => {
    // Mock fetch for data
    const fetchDonors = async () => {
      const response = await fetch("https://api.example.com/mock-donors"); // Replace with your mock API
      const data = await response.json();
      setDonors(data);
    };
    fetchDonors();
  }, []);

  // Sort donors based on selected criteria
  useEffect(() => {
    const sorted = [...donors].sort((a, b) => {
      if (sortCriteria === "name") {
        return a.name.localeCompare(b.name); // Sort alphabetically by name
      } else if (sortCriteria === "amount") {
        return b.amount - a.amount; // Sort by amount in descending order
      }
      return 0;
    });
    setSortedDonors(sorted);
  }, [donors, sortCriteria]);

  return (
    <Container>
      <h1 className="my-4">Support for Gaza</h1>
      <p>Thank you to our generous donors who have contributed to this cause.</p>
      <Button variant="success" className="mb-3">
        Donate Now
      </Button>

      <Dropdown className="mb-3">
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Sort by: {sortCriteria === "name" ? "Name" : "Amount"}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setSortCriteria("name")}>
            Name
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSortCriteria("amount")}>
            Amount
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Message</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {sortedDonors.map((donor) => (
            <tr key={donor.id}>
              <td>{donor.id}</td>
              <td>{donor.name}</td>
              <td>${donor.amount.toFixed(2)}</td>
              <td>{donor.message}</td>
              <td>{donor.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default DonorPage;
