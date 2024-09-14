import React, { useState } from "react";

import "../styles/header.css";

const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="header-main">
      <h3 className="header-logo">Netflix</h3>
      <div className="header-right">
        <input
          type="text"
          placeholder="Search"
          className="header-right-components"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <h5>User 1</h5>
        <button className="header-right-components">Settings</button>
      </div>
    </div>
  );
};

export default Header;
