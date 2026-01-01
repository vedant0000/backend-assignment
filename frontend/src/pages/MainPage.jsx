import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import './MainPage.css';

const MainPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = (e) => {
    e.preventDefault();
    setIsLogin(!isLogin);
  };

  return (
    <div className="form-container">
      {isLogin ? <Login /> : <Register />}

      <a href="#" id="new-user" onClick={toggleForm}>
        {isLogin
          ? "New user? Register here."
          : "Existing user? Login here."}
      </a>
    </div>
  );
};

export default MainPage;