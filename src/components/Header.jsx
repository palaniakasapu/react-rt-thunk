import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              <Link to="/">Home</Link>              
            </a>
            <a className="nav-item nav-link" href="#">
              <Link to="/about">About us</Link>
            </a>
            <a className="nav-item nav-link" href="#">
              <Link to="/contact">Contact us</Link>
            </a>
            <a className="nav-item nav-link" href="#">
              <Link to="/users">Users</Link>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
