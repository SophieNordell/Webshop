const SortDropdown = ({ sortOrder, onSortChange }) => {
  return (
    <div className="dropdown">
      <select
        id="sort-select"
        onChange={onSortChange}
        value={sortOrder}
        aria-label="Sorteringsalternativ"
      >
        <option value="" disabled>
          Sortera efter pris
        </option>
        <option value="low-to-high">Lägsta till högsta</option>
        <option value="high-to-low">Högsta till lägsta</option>
      </select>
    </div>
  );
};

export default SortDropdown;
