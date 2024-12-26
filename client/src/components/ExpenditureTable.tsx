import React from 'react';

const ExpenditureTable: React.FC<{ filters: any }> = ({ filters }) => {
  const expenditures = [
    { date: '2024-01-10', category: 'Food', amount: 5000, description: 'Food aid' },
    { date: '2024-02-15', category: 'Shelter', amount: 3000, description: 'Temporary housing' },
    // Replace with API data
  ];

  const filteredData = expenditures.filter((ex) => {
    return (
      (filters.category === 'All' || ex.category === filters.category) &&
      (!filters.dateRange.start || new Date(ex.date) >= new Date(filters.dateRange.start)) &&
      (!filters.dateRange.end || new Date(ex.date) <= new Date(filters.dateRange.end))
    );
  });

  return (
    <div className="expenditure-table">
      <h3>Expenditure Details</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((ex, index) => (
            <tr key={index}>
              <td>{ex.date}</td>
              <td>{ex.category}</td>
              <td>${ex.amount}</td>
              <td>{ex.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenditureTable;
