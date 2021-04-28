import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-dark shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand text-light">
          E-store <i class="fas fa-store"></i>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/about" className="nav-link text-light">
                About
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink to="/signin" className="nav-link text-light">
                Sing In
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/signup" className="nav-link text-light">
                Sign Up
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink to="/logout" className="nav-link text-light">
                Sing Out
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
