import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-slate-200 px-6 py-0 h-16 flex items-center justify-between">
      {/* Brand */}
      <NavLink to="/" className="text-slate-800 font-bold text-lg tracking-tight">
        AuthSystem
      </NavLink>

      {/* Nav Links */}
      <div className="flex items-center gap-1">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? "px-4 py-2 rounded-md text-sm font-medium text-blue-600 bg-blue-50"
              : "px-4 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-2 rounded-md text-sm font-medium text-blue-600 bg-blue-50"
              : "px-4 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-2 rounded-md text-sm font-medium text-blue-600 bg-blue-50"
              : "px-4 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          }
        >
          Contact
        </NavLink>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-3">
        <NavLink
          to="/login"
          className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Sign up
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
