import { ProductItem } from 'components/ProductItem';
import { Component } from 'react';

class FavoriteList extends Component {
  state = {
    favoriteList: [],
  };

  componentDidMount() {
    if (localStorage.getItem('fav_camper_list') !== null) {
      const favorite = localStorage.getItem('fav_camper_list') ?? [];
      // const products = JSON.parse(favorite);

      this.setState({ favoriteList: JSON.parse(favorite) });
    }
  }

  render() {
    const { favoriteList } = this.state;
    return (
      <div className="card-set">
        <div className="card-set-container">
          {favoriteList.length > 0 ? (
            favoriteList.map(item => {
              return <ProductItem item={item} key={item._id} />;
            })
          ) : (
            <p>No products in your cart</p>
          )}
        </div>
      </div>
    );
  }
}

export default FavoriteList;
