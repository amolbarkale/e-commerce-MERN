import { useState } from "react";
import "./login.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCall";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleCLick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        style={{ padding: "10px", marginBottom: "20px" }}
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={{ padding: "10px", marginBottom: "20px" }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button style={{ width: "100px", padding: "10px" }} onClick={handleCLick}>
        Login
      </button>
    </div>
  );
};

export default Login;
