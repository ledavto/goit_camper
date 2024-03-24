// import { useSelector } from 'react-redux';
// import { selectReviews } from '../../redux/camper/selectors';
import FormBook from 'components/FormBook';

const Reviews = () => {
  // const reviews = useSelector(selectReviews);
  return (
    <div className="section-reviews">
      <div className="reviews-container">Reviews</div>

      <FormBook />
    </div>
  );
};

export default Reviews;
