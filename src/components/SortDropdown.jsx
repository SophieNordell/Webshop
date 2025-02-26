const SortDropdown = ({ sortOrder, onSortChange }) => {
  return (
    <div className="dropdown">
      <select id="sort-select" onChange={onSortChange} value={sortOrder}>
        <option value="">Sortera efter pris</option>
        <option value="low-to-high">Lägsta till högsta</option>
        <option value="high-to-low">Högsta till lägsta</option>
      </select>
    </div>
  );
};

export default SortDropdown;
