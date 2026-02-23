import React from "react";
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>

      {/* Sidebar */}
      <div style={{
        width: "220px",
        background: "#1e293b",
        color: "white",
        padding: "20px"
      }}>
        <h2>LazyApp</h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <Link to="/" style={{ color: "white" }}>Home</Link>
          <Link to="/dashboard" style={{ color: "white" }}>Dashboard</Link>
          <Link to="/profile" style={{ color: "white" }}>Profile</Link>
          <Link to="/settings" style={{ color: "white" }}>Settings</Link>
        </nav>

      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        padding: "30px",
        background: "#f1f5f9"
      }}>
        {children}
      </div>

    </div>
  );
}

export default Layout;
