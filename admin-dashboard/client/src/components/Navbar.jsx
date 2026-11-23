
import { Search, Bell, User } from "lucide-react";

function Navbar() {
  return (
    <div className="navbar">

      <div>
        <h2>Dashboard</h2>
        <p>Welcome back, Admin!</p>
      </div>

      <div className="navbar-right">
        <div className="search">
          <Search size={18} />
          <input placeholder="Search..." />
        </div>

        <Bell size={22} />

        <div className="admin-profile">
          <User size={20} />
          <span>Admin</span>
        </div>
      </div>

    </div>
  );
}

export default Navbar;
