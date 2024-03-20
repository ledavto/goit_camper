import { Link } from 'react-router-dom';

export const NavBar = () => {
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/cart">
              Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
