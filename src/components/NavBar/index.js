import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/catalog">
              Catalog
            </Link>
            <Link className="nav-link" to="/favorites">
              Favorite
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
