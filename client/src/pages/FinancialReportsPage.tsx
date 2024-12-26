import React from 'react';
import CategoryBreakdownChart from '../components/CategoryBreakdownChart';
import ExpenditureTable from '../components/ExpenditureTable';
import FilterBar from '../components/FilterBar';


const TrackingReportsPage: React.FC = () => {
  const [filters, setFilters] = React.useState({
    dateRange: { start: '', end: '' },
  });

  const handleFilterChange = (updatedFilters: any) => {
    setFilters(updatedFilters);
  };
 
  return (
    <div className="tracking-reports-page">
      <FilterBar onChange={handleFilterChange} />
      <CategoryBreakdownChart filters={filters} />
      <ExpenditureTable filters={filters} />
    </div>
  );
};

export default TrackingReportsPage;
