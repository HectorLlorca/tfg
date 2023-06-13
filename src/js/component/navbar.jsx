import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <span>Home</span>
      </Link>
    </nav>
  );
};
