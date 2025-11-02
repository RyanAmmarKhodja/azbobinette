import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthProvider";

const Dashboard = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const auth = useAuth();

  const submit = async () => {
    try {
      const res = await auth.logout();
      console.log("Logged out", res);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <button onClick={submit}>Logout</button>

      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default Dashboard;
