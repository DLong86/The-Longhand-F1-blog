import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>
        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
          MM
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/recent" style={{ textDecoration: "none", color: "#fff" }}>
            Recent
          </Link>
        </li>
        <li>
          <Link to="/archive" style={{ textDecoration: "none", color: "#fff" }}>
            Archive
          </Link>
        </li>

        <li>
          <Link to="/search" style={{ textDecoration: "none", color: "#fff" }}>
            Search
          </Link>
        </li>
        <li>
          <Link to="/george" style={{ textDecoration: "none", color: "#fff" }}>
            Faraway George
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ textDecoration: "none", color: "#fff" }}>
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
