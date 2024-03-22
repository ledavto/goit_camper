import { ProductItem } from 'components/ProductItem';
import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/camper/camper-operations';
import {
  selectCamper,
  selectCamperLoading,
} from '../../redux/camper/selectors';
// import { fetchProductbyFarm } from '../../redux/product/product-operations';
// import {
//   selectProductByFarm,
//   selectProductLoading,
// } from '../../redux/product/selectors';

const ProductList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCamper);
  const isLoading = useSelector(selectCamperLoading);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className="main-container">
      {isLoading && <div>Loading...</div>}
      {campers.length > 0 &&
        campers.map(item => <ProductItem item={item} key={item._id} />)}
    </div>
  );
};

export default ProductList;
