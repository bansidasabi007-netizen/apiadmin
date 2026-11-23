
import {
  LayoutDashboard,
  Users,
  Package,
  Settings,
  LogOut
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2 className="logo">Admin<span>Pro</span></h2>

      <p className="menu-title">MENU</p>

      <NavLink to="/" className="menu-link">
        <LayoutDashboard size={20} />
        Dashboard
      </NavLink>

      <NavLink to="/users" className="menu-link">
        <Users size={20} />
        Users
      </NavLink>

      <NavLink to="/products" className="menu-link">
        <Package size={20} />
        Products
      </NavLink>

      <div className="sidebar-bottom">
        <NavLink to="/settings" className="menu-link">
          <Settings size={20} />
          Settings
        </NavLink>

        <div className="menu-link">
          <LogOut size={20} />
          Logout
        </div>
      </div>

    </div>
  );
}

export default Sidebar;
