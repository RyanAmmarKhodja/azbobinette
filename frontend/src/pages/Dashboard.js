import { useState } from "react";
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

      <div className="card text-white bg-info mb-3" style={{ maxWidth: "20rem" }}>
        <div className="card-header">Header</div>
        <div className="card-body">
          <h4 className="card-title">Info card title</h4>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>

      <div className="card text-white bg-primary mb-3" style={{ maxWidth: "20rem" }}>
        <div className="card-header">Header</div>
        <div className="card-body">
          <h4 className="card-title">Primary card title</h4>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>

      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default Dashboard;
