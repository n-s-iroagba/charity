import React, { useState, ChangeEvent, FormEvent } from "react";

type Cause = {
  id: number;
  name: string;
};

const DonationForm: React.FC = () => {
  const [donationAmount, setDonationAmount] = useState<number | "">("");
  const [selectedCauses, setSelectedCauses] = useState<number[]>([]);
  const [message, setMessage] = useState<string>("");

  const causes: Cause[] = [
    { id: 1, name: "Food Aid" },
    { id: 2, name: "Medical Supplies" },
    { id: 3, name: "Shelter and Housing" },
    { id: 4, name: "Educational Support" },
    { id: 5, name: "General Relief Efforts" },
  ];

  const handleCheckboxChange = (causeId: number): void => {
    setSelectedCauses((prev) =>
      prev.includes(causeId)
        ? prev.filter((id) => id !== causeId)
        : [...prev, causeId]
    );
  };

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value ? parseFloat(e.target.value) : "";
    setDonationAmount(value);
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    if (!donationAmount || selectedCauses.length === 0) {
      setMessage("Please enter a donation amount and select at least one cause.");
      return;
    }

    // Here, you can send the data to your backend for processing
    console.log("Donation Amount:", donationAmount);
    console.log("Selected Causes:", selectedCauses);

    setMessage("Thank you for your generous donation!");
    setDonationAmount("");
    setSelectedCauses([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Donate to Support Gaza</h2>
      <label>
        Donation Amount ($):
        <input
          type="number"
          value={donationAmount || ""}
          onChange={handleAmountChange}
          required
        />
      </label>

      <h3>Select Causes to Support:</h3>
      {causes.map((cause) => (
        <div key={cause.id}>
          <input
            type="checkbox"
            id={`cause-${cause.id}`}
            checked={selectedCauses.includes(cause.id)}
            onChange={() => handleCheckboxChange(cause.id)}
          />
          <label htmlFor={`cause-${cause.id}`}>{cause.name}</label>
        </div>
      ))}

      <button type="submit">Donate</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default DonationForm;
