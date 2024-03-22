import sprite from '../../assets/svgSprite/symbol-defs.svg';
import img from '../../assets/img/car-1.jpg';
import { useState } from 'react';
import { ModalProduct } from 'components/ModalProduct';

export const ProductItem = ({ item }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleFavorite = event => {
    if (event.currentTarget === event.target) {
      console.log('addFavorite');
    }
  };
  const {
    name,
    price,
    location,
    rating,
    description,
    reviews,
    gallery,
    details,
  } = item;

  const showMoreModal = () => {
    setIsShowModal(true);
  };

  return (
    <div className="product-item">
      <img src={gallery[0]} alt="Boy with laptop" width="400" />
      <div className="product-info">
        <div className="product-title">
          <h2 className="product-name">{name}</h2>
          <div className="product-price-cont">
            <p className="product-price">€{price}</p>
            <svg
              width="24"
              height="24"
              className="icon-heart"
              onClick={handleFavorite}
            >
              <use href={`${sprite}#icon-heart`}></use>
            </svg>
          </div>
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
        <div className="product-title-info">
          <p>{description.slice(0, 100)}</p>
        </div>
        <div className="product-detail">
          {Object.keys(details).map(elem => (
            <div className="product-btn-option">
              <svg width="20" height="20" className="icon">
                <use href={`${sprite}#icon-users`}></use>
              </svg>
              <div className="btn-option-text">
                {details[elem]} {elem}
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="showmore-button"
          onClick={() => showMoreModal()}
        >
          Show more
        </button>
        {isShowModal && (
          <ModalProduct data={item} onClose={() => setIsShowModal(false)} />
        )}
      </div>
    </div>
  );
};
