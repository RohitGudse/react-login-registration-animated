import React, { useState } from "react";
import "./Login.css";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isLogin ? "Login Successful" : "Registration Successful");
  };

  return (
    <div className="Login-container">
      <div className={`auth-box ${isLogin ? "" : "active"}`}>
        {/* LOGIN */}
        <div className="form login-form">
          <h2>Welcome Back</h2>
          <p>Login to your account</p>

          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button>Login</button>
          </form>

          <span onClick={toggleForm}>
            Don’t have an account? <b>Register</b>
          </span>
        </div>

        {/* REGISTER */}
        <div className="form register-form">
          <h2>Create Account</h2>
          <p>Register to get started</p>

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button>Register</button>
          </form>

          <span onClick={toggleForm}>
            Already have an account? <b>Login</b>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Auth;
