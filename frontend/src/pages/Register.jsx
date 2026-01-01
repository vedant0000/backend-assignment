import api from "../services/api";
import './style.css';

export default function Register() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value
    };

    try {
      await api.post("/auth/register", data);
      alert("Registered successfully");
    } catch (err) {
        console.error(err.response?.data || err.message);
        alert(err.response?.data?.message || "Request failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input name="name" placeholder="Name" />
      <input name="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button>Register</button>
    </form>
  );
}
