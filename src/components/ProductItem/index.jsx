import sprite from '../../assets/svgSprite/symbol-defs.svg';
import { useState } from 'react';
import { ModalProduct } from 'components/ModalProduct';
import Notiflix from 'notiflix';
import axios from 'axios';

export const ProductItem = ({ item }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const URL = 'https://657855f2f08799dc8044f5c2.mockapi.io';

  const campersById = async id => {
    const user = await axios.get(`${URL}/campers/${id}`);
    // console.log(user);
    return user;
  };

  const handleFavorite = event => {
    if (event.currentTarget === event.target) {
      const idProd = event.target.getAttribute('id');

      campersById(idProd).then(elem => {
        const favoriteList = localStorage.getItem('fav_camper_list') ?? [];
        const parsedCart =
          favoriteList.length > 0 ? JSON.parse(favoriteList) : [];

        if (parsedCart.findIndex(({ id }) => id === idProd) !== -1) {
          parsedCart.splice(
            parsedCart.findIndex(({ id }) => id === idProd),
            1
          );
          Notiflix.Notify.success('Product DELETE from Favorite!');
        } else {
          parsedCart.push(elem.data);
          Notiflix.Notify.success('Product add to Favorite!');
        }
        localStorage.setItem('fav_camper_list', JSON.stringify(parsedCart));

        document.getElementById(idProd).classList.toggle('in-favorite');
        return elem.data;
      });
    }
  };

  const {
    id,
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

  const isInLocal = idCard => {
    const favoriteList = localStorage.getItem('fav_camper_list') ?? [];
    const parsedCart = favoriteList.length > 0 ? JSON.parse(favoriteList) : [];

    const findInLocal = parsedCart.findIndex(({ id }) => id === idCard);

    return findInLocal !== -1 ? true : false;
  };

  return (
    <div className="product-item">
      <img src={gallery[0]} alt="Boy with laptop" height="200" />
      <div className="product-info">
        <div className="product-title">
          <h2 className="product-name">{name}</h2>
          <div className="product-price-cont">
            <p className="product-price">€{price}</p>

            <div>
              <svg
                width="24"
                height="24"
                className={
                  isInLocal(id) ? 'icon-heart in-favorite' : 'icon-heart'
                }
                onClick={handleFavorite}
                id={id}
              >
                <use href={`${sprite}#icon-heart`}></use>
              </svg>
            </div>
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
        <div className="showmore-button" onClick={() => showMoreModal()}>
          <span>Show more</span>
        </div>
        {isShowModal && (
          <ModalProduct data={item} onClose={() => setIsShowModal(false)} />
        )}
      </div>
    </div>
  );
};
