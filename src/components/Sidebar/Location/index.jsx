import sprite from '../../../assets/svgSprite/symbol-defs.svg';

export const Location = () => {
  return (
    <div className="location">
      <label htmlFor="location" className="location-label">
        Location
      </label>
      <div className="cont-input-location">
        <input
          className="location-input"
          id="location"
          name="loc-input"
          type="text"
          value="Ukraine, Kyiv"
        />
      </div>
      <svg width="40" height="28" className="icon-input">
        <use href={`${sprite}#icon-map-pin`}></use>
      </svg>
    </div>
  );
};
