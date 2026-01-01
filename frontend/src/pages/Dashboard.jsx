import { useEffect, useState } from "react";
import api from "../services/api";
import { jwtDecode } from "jwt-decode";
import "./Dashboard.css";

export default function Dashboard({ onLogout }) {
  const [role, setRole] = useState("");
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    setRole(decoded.role);
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  const fetchUsers = async () => {
    const res = await api.get("/admin/users");
    setUsers(res.data);
  };

  const addTaskToUser = async () => {
    const userId = prompt("Enter User ID");
    const title = prompt("Task title");

    if (!userId || !title) return;

    await api.post("/admin/tasks", {
      userId,
      title
    });

    alert("Task added to user");
  };

  const deleteUser = async () => {
    const userId = prompt("Enter User ID to delete");
    if (!userId) return;

    await api.delete(`/admin/users/${userId}`);
    alert("User deleted");
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const logout = () => {
    localStorage.removeItem("token");
    onLogout();
  };

  return (
    <div className="main-container">
      <div className="nav-container">
        <h2>Dashboard ({role})</h2>
        <button className="dash-button" onClick={logout}>Logout</button>
      </div>

      {role === "admin" && (
        <div className="admin-controls">
          <h3>Admin Controls</h3>

          <div className="admin-buttons">
            <button className="dash-button" onClick={fetchUsers}>Display Users</button>
            <button className="dash-button" onClick={addTaskToUser}>Add Task to User</button>
            <button className="dash-button" onClick={deleteUser}>Delete User</button>
          </div>

          <div className="display-user">
            {users.length > 0 && (
              <ul className="users">
                {users.map((u) => (
                  <li key={u._id}>
                    <span>USER_ID: {u._id}</span> <span>EMAIL_ID: {u.email}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}


      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title}
            {role === "admin" && (
              <button onClick={() => deleteTask(task._id)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
