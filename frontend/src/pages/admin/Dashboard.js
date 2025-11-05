import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthProvider";
import Card from "../../components/admin/Card";

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

      <div className="d-flex align-items-center gap-4 my-4" style={{width:"100vw", justifyContent:"center"}}>
        <Card type="animals" />

        <Card type="families" />
      </div>
      

      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default Dashboard;
