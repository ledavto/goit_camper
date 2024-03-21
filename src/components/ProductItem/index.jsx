import sprite from '../../assets/svgSprite/symbol-defs.svg';
import img from '../../assets/img/car-1.jpg';

export const ProductItem = () => {
  return (
    <div className="product-item">
      <img src={img} alt="Boy with laptop" />
      <div className="product-info">
        <div className="product-title">
          <h2 className="product-name">Mavericks</h2>
          <div className="product-price-cont">
            <p className="product-price">€8000.00</p>
            <svg width="24" height="24" className="icon-heart">
              <use href={`${sprite}#icon-heart`}></use>
            </svg>
          </div>
        </div>
        <div className="product-title-info">
          <div className="title-btn-stars">
            <svg width="16" height="16" className="icon">
              <use href={`${sprite}#icon-map-pin`}></use>
            </svg>
            <span>4.4(2 Reviews)</span>
          </div>
          <div className="title-btn-location">
            <svg width="16" height="16" className="icon">
              <use href={`${sprite}#icon-map-pin`}></use>
            </svg>
            <span>Kyiv, Ukraine</span>
          </div>
        </div>
        <div className="product-title-info">
          <p>
            Embrace simplicity and freedom with the Mavericks panel truck, an...
          </p>
        </div>
        <div className="product-title-info">
          <div className="product-btn-option">
            <svg width="20" height="20" className="icon">
              <use href={`${sprite}#icon-users`}></use>
            </svg>
            <div className="btn-option-text">2 adults</div>
          </div>
        </div>
        <div className="showmore-button">
          <span>Show more</span>
        </div>
      </div>
    </div>
  );
};
