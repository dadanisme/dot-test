import "./Navbar.css";
import { useEffect, useState } from "react";

export default function Navbar(props) {
  const [input, setInput] = useState("");
  const [user, setUser] = useState("guest");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(input);
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")).username);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="navbar">
      <form className="search-bar">
        <input
          type="text"
          placeholder="Search"
          className="form-control"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="btn btn-outline-light"
          onClick={handleSubmit}
        >
          Search
        </button>
      </form>
      <div className="user-information">
        Signed in as <span className="user-name">{user}</span>,{" "}
        <span className="logout" onClick={handleLogout}>
          Logout
        </span>
      </div>
    </div>
  );
}
