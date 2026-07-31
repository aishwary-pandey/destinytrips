import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo1.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ company }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinkClass = ({ isActive }) =>
    `pb-1 border-b-2 transition-all duration-300 ${isActive
      ? "text-blue-400 border-blue-400"
      : "text-white border-transparent hover:text-blue-300 hover:border-blue-300"
    }`;

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-4">
          <img
            src={logo}
            alt="Destiny Trips Logo"
            className="h-16 w-16 object-contain transition-transform duration-300 hover:rotate-6 hover:scale-105"
          />

          <h1 className="heading-font text-3xl font-extrabold tracking-tight text-white">
            {company}
          </h1>
        </Link>

        <ul className="hidden items-center gap-8 font-semibold text-white md:flex">
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

        <Link
          to="/booking"
          className="hidden rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-blue-500/40 active:scale-95 md:block"
        >
          Book Now
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="bg-black/90 backdrop-blur-md md:hidden">
          <ul className="flex flex-col items-center gap-6 py-6 font-semibold text-white">
            <li>
              <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/packages" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                Packages
              </NavLink>
            </li>

            <li>
              <NavLink to="/destinations" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                Destinations
              </NavLink>
            </li>

            <li>
              <NavLink to="/gallery" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                Gallery
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                Contact
              </NavLink>
            </li>

            <li>
              <Link
                to="/booking"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;