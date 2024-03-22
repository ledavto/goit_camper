import sprite from '../../assets/svgSprite/symbol-defs.svg';
import { useEffect } from 'react';

export const ModalProduct = ({ data, onClose }) => {
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const { name, price, location, rating, description, reviews, gallery } = data;

  useEffect(() => {
    const handleKeydown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-container">
        <div className="modal-title-cont">
          <div className="modal-title">
            <h2 className="modal-name">{name}</h2>
            <svg
              width="32"
              height="32"
              className="icon-close"
              onClick={handleBackdropClick}
            >
              <use href={`${sprite}#icon-close-btn`}></use>
            </svg>
          </div>
          <div className="product-title-info">
            <div className="title-btn-stars">
              <svg width="16" height="16" className="icon">
                <use href={`${sprite}#icon-map-pin`}></use>
              </svg>
              <span>
                {rating}({reviews.length} Reviews)
              </span>
            </div>
            <div className="title-btn-location">
              <svg width="16" height="16" className="icon">
                <use href={`${sprite}#icon-map-pin`}></use>
              </svg>
              <span>{location}</span>
            </div>
          </div>
          <div className="modal-price-cont">
            <p className="product-price">€{price}</p>
          </div>
        </div>

        <div className="modal-img-container">
          {gallery.map(elem => (
            <img src={elem} alt="Car" width="300" />
          ))}
        </div>
        <div className="modal-product-text">
          <p>{description}</p>
        </div>

        <div className="navi-info">
          <div className="navi-features">
            <p>Features</p>
          </div>
          <div className="navi-reviews">
            <p>Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};
