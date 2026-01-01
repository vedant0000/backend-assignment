import api from "../services/api";
import './style.css';

export default function Login() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = {
      email: form.email.value,
      password: form.password.value
    };

    try {
      const res = await api.post("/auth/login", data);
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
    } catch (err) {
        console.error(err.response?.data || err.message);
        alert(err.response?.data?.message || "Request failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input name="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button>Login</button>
    </form>
  );
}
