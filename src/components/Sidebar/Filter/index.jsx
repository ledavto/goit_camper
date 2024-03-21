import sprite from '../../../assets/svgSprite/symbol-defs.svg';

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
          <li className="filter-item">
            <svg width="32" height="32" className="icon">
              <use href={`${sprite}#icon-ac`}></use>
            </svg>
            <div className="filter-item-text">AC</div>
          </li>
          <li className="filter-item">
            <svg width="32" height="32" className="icon">
              <use href={`${sprite}#icon-automatic`}></use>
            </svg>
            <div className="filter-item-text">Automatic</div>
          </li>
          <li className="filter-item">
            <svg width="32" height="32" className="icon">
              <use href={`${sprite}#icon-kitchen`}></use>
            </svg>
            <div className="filter-item-text">Kitchen</div>
          </li>
          <li className="filter-item">
            <svg width="32" height="32" className="icon">
              <use href={`${sprite}#icon-tv`}></use>
            </svg>
            <div className="filter-item-text">TV</div>
          </li>
          <li className="filter-item">
            <svg width="32" height="32" className="icon">
              <use href={`${sprite}#icon-shower`}></use>
            </svg>
            <div className="filter-item-text">Kitchen</div>
          </li>
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
          <li className="filter-item">
            <svg width="40" height="28" className="icon">
              <use href={`${sprite}#icon-van`}></use>
            </svg>
            <div className="filter-item-text">Van</div>
          </li>
          <li className="filter-item">
            <svg width="40" height="28" className="icon">
              <use href={`${sprite}#icon-fully-int`}></use>
            </svg>
            <div className="filter-item-text">Fully Integrated</div>
          </li>
          <li className="filter-item">
            <svg width="40" height="28" className="icon">
              <use href={`${sprite}#icon-alcove`}></use>
            </svg>
            <div className="filter-item-text">Alcove</div>
          </li>
        </ul>
      </div>
      <div className="filter-button">
        <span>Filter</span>
      </div>
    </div>
  );
};
