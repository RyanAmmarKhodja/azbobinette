import React, { useState, useEffect } from "react";
import { useAuth } from "../AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    if (auth.token) {
      navigate("/dashboard");
    }
  });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await auth.login(email, password);
      console.log("Logged in", auth.user);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    // <form onSubmit={submit}>
    //   <input
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //     placeholder="Email"
    //   />
    //   <input
    //     type="password"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //     placeholder="Password"
    //   />
      
    //   <button type="submit">Login</button>
    //   {error && <div style={{ color: "red" }}>{error}</div>}
    // </form>
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      
      <div className="card p-4 shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Sign In</h3>

          <form onSubmit={submit}>
            
            {/* Email Input Group */}
            <div className="mb-3">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                type="email" // Recommended for better mobile/validation
                className="form-control form-control-lg" // Bootstrap input classes
                required
              />
            </div>

            {/* Password Input Group */}
            <div className="mb-3">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="form-control form-control-lg" // Bootstrap input classes
                required
              />
            </div>
            
            {/* Submit Button */}
            <button type="submit" className="btn btn-primary btn-lg w-100 mt-3">
              Log In
            </button>
            
            {/* Error Message */}
            {error && (
              <div className="alert alert-danger mt-3" role="alert">
                {error}
              </div>
            )}
            
          </form>
        </div>
      </div>
    </div>
  );
}
