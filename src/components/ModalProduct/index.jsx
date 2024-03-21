import sprite from '../../assets/svgSprite/symbol-defs.svg';
import img1 from '../../assets/img/car-1.jpg';
import img2 from '../../assets/img/car-1-2.jpg';
import img3 from '../../assets/img/car-1-3.jpg';
import { useEffect } from 'react';

export const ModalProduct = ({ onClose }) => {
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

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
        {/* <img src={img} alt="Boy with laptop" /> */}
        <div className="modal-title-cont">
          <div className="modal-title">
            <h2 className="modal-name">Mavericks</h2>
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
              <span>4.4(2 Reviews)</span>
            </div>
            <div className="title-btn-location">
              <svg width="16" height="16" className="icon">
                <use href={`${sprite}#icon-map-pin`}></use>
              </svg>
              <span>Kyiv, Ukraine</span>
            </div>
          </div>
          <div className="modal-price-cont">
            <p className="product-price">€8000.00</p>
          </div>
        </div>

        <div className="modal-img-container">
          <img src={img1} alt="Car" />
          <img src={img2} alt="Car" />
          <img src={img3} alt="Car" />
        </div>
        <div className="modal-product-text">
          <p>
            Embrace simplicity and freedom with the Mavericks panel truck, an
            ideal choice for solo travelers or couples seeking a compact and
            efficient way to explore the open roads. This no-frills yet reliable
            panel truck offers the essentials for a comfortable journey, making
            it the perfect companion for those who value simplicity and
            functionality.
          </p>
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
