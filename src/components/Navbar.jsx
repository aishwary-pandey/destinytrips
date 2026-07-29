import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo1.png";
function Navbar({ company }) {
  const navLinkClass = ({ isActive }) =>
    `pb-1 border-b-2 transition-all duration-300 ${isActive
      ? "text-blue-400 border-blue-400"
      : "text-white border-transparent hover:text-blue-300 hover:border-blue-300"
    }`;
  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <div className="flex items-center gap-4 cursor-pointer">
          <img
            src={logo}
            alt="Destiny Trips Logo"
            className="h-16 w-16 object-contain"
          />

          <h1 className="text-3xl font-bold text-white">
            {company}
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8 font-semibold text-white">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/packages" className={navLinkClass}>
              Packages
            </NavLink>
          </li>

          <li>
            <NavLink to="/destinations" className={navLinkClass}>
              Destinations
            </NavLink>
          </li>

          <li>
            <NavLink to="/gallery" className={navLinkClass}>
              Gallery
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Button */}
        <Link
          to="/booking"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300"
        >
          Book Now
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;