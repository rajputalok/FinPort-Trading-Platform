import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [username, setUsername] = useState("USERID");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:3002/getUser", { withCredentials: true });
        if (response.data.status) {
          setUsername(response.data.user);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };
  const handleProfileDropdown = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3002/logout",
        {},
        { withCredentials: true }
      );
      if (data.success) {
        window.location.href = "http://localhost:3000";
      }
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";


  return (
    <div className="menu-container">
      <img src="finportlogo.jpeg" style={{ width: "80px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:'none'}} to="/" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu===0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:'none'}} to="/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu===1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:'none'}} to="/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu===2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:'none'}} to="/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu===3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
           <Link style={{textDecoration:'none'}} to="/funds" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu===4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:'none'}} to="/apps" onClick={() => handleMenuClick(5)}>
              <p className={selectedMenu===5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileDropdown}>
          <div className="avatar">FPU</div>
          <p className="username">{username}</p>
        </div>
        {isProfileDropdownOpen && (
          <div className="profile-dropdown">
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
