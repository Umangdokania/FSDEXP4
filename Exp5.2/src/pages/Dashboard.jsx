import React from "react";

function Dashboard() {
  return (
    <div>

      <h1>Dashboard</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        marginTop: "20px"
      }}>

        <div style={cardStyle}>
          <h3>Users</h3>
          <p>1,250</p>
        </div>

        <div style={cardStyle}>
          <h3>Revenue</h3>
          <p>$8,500</p>
        </div>

        <div style={cardStyle}>
          <h3>Orders</h3>
          <p>320</p>
        </div>

      </div>

    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
};

export default Dashboard;
