import { useEffect, useState } from "react";
import MainPage from "./pages/MainPage";
import Dashboard from "./pages/Dashboard";
import "./App.css";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <>
      {isAuthenticated ? (
        <Dashboard onLogout={() => setIsAuthenticated(false)} />
      ) : (
        <MainPage onLoginSuccess={() => setIsAuthenticated(true)} />
      )}
    </>
  );
}
