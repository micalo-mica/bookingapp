import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
import { publicRequest } from "../../requestMethod";
import "./register.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
    country: undefined,
    city: undefined,
  });

  const [message, setMessage] = useState(null, {});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //   const { user, loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await publicRequest.post("/auth/register", credentials);
      setLoading(true);
      setMessage(res.data);
      navigate("/login");
    } catch (err) {
      setError(error.res.data);
    }
  };

  //   console.log(user);

  return (
    <div className="login">
      <h2 className="loginText">Register </h2>
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="country"
          id="country"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="city"
          id="city"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Register
        </button>
        {error ? <span>{error.message}</span> : <span>{message}</span>}
      </div>
    </div>
  );
};

export default Login;
