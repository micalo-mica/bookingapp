import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";

function Navbar() {
  const { user, dispatch } = useContext(AuthContext);

  const logOut = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">booking</span>
        </Link>
        <div className="rightContainer">
          {user && <p className="welcome">welcome, {user.username}</p>}

          <div className="navItems">
            {!user ? (
              <>
                <Link
                  to="/register"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <button className="navButton">Register</button>
                </Link>
                <Link
                  to="/login"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <button className="navButton">Login</button>
                </Link>
              </>
            ) : (
              <button className="navButton" onClick={logOut}>
                Log out
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
