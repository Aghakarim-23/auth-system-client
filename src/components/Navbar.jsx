import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "px-4 py-2 rounded-md text-sm font-medium text-blue-600 bg-blue-50"
      : "px-4 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors";

  return (
    <nav className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-6 relative">
      {/* Brand */}
      <NavLink to="/" className="text-slate-800 font-bold text-lg tracking-tight">
        AuthSystem
      </NavLink>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-1">
        <NavLink to="/" end className={linkClass}>Home</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
      </div>

      {/* Desktop Auth Buttons */}
      <div className="hidden md:flex items-center gap-3">
        <NavLink to="/login" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
          Login
        </NavLink>
        <NavLink to="/register" className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Sign up
        </NavLink>
      </div>

      {/* Hamburger Button (mobile only) */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-0.5 bg-slate-700 transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-5 h-0.5 bg-slate-700 transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-0.5 bg-slate-700 transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white min-h-screen border-b border-slate-200 shadow-md px-4 py-4 flex flex-col gap-1 z-50">
          <NavLink to="/" end className={linkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={linkClass} onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setMenuOpen(false)}>Contact</NavLink>
          <div className="border-t border-slate-100 mt-2 pt-3 flex flex-col gap-2">
            <NavLink to="/login" className="px-4 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors" onClick={() => setMenuOpen(false)}>
              Login
            </NavLink>
            <NavLink to="/register" className="px-4 py-2 rounded-md text-sm font-medium bg-blue-600 text-white text-center hover:bg-blue-700 transition-colors" onClick={() => setMenuOpen(false)}>
              Sign up
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
