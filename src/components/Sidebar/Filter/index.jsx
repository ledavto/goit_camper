export const Filter = () => {
  return (
    <div className="filter">
      <div className="filter-label">Filters</div>
      <div className="filter-name">
        <div>Vehicle equipment</div>
        <svg
          width="360"
          height="2"
          viewBox="0 0 360 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 1H360" stroke="#101828" stroke-opacity="0.1" />
        </svg>

        <ul className="filter-group">
          <li className="filter-item"></li>
          <li className="filter-item"></li>
          <li className="filter-item"></li>
        </ul>
      </div>
      <div className="filter-name">
        <div>Vehicle type</div>
        <svg
          width="360"
          height="2"
          viewBox="0 0 360 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 1H360" stroke="#101828" stroke-opacity="0.1" />
        </svg>

        <ul className="filter-group">
          <li className="filter-item"></li>
          <li className="filter-item"></li>
          <li className="filter-item"></li>
        </ul>
      </div>
      <div className="filter-button">Filter</div>
    </div>
  );
};
