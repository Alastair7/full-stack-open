const CountryFilter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      Find Countries <input value={filter} onChange={handleFilterChange} />
    </div>
  );
};

export default CountryFilter;
