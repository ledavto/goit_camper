export const Location = () => {
  return (
    <div className="location">
      <label htmlFor="location" className="location-label">
        Location
      </label>
      <input
        className="location-input"
        id="location"
        name="loc-input"
        type="text"
        value="Ukraine, Kyiv"
      />
    </div>
  );
};
