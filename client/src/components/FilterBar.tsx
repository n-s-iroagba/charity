import React from 'react';

interface FilterBarProps {
  onChange: (filters: any) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onChange }) => {
  const handleFilters = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onChange((prev: any) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="filter-bar">
      <input
        type="date"
        name="startDate"
        onChange={handleFilters}
        placeholder="Start Date"
      />
      <input
        type="date"
        name="endDate"
        onChange={handleFilters}
        placeholder="End Date"
      />
      <select name="category" onChange={handleFilters}>
        <option value="All">All Categories</option>
        <option value="Food">Food</option>
        <option value="Shelter">Shelter</option>
        <option value="Medicine">Medicine</option>
      </select>
    </div>
  );
};

export default FilterBar;
