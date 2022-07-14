import "./App.css";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Movies from "./Components/Movies";

function App() {
  const [input, setInput] = useState("");
  const [isInput, setIsInput] = useState(false);
  const handleSearch = (text) => {
    setInput(text);
    setIsInput(true);
  };

  if (!localStorage.getItem("user")) {
    window.location.href = "/login";
  }

  return (
    <div className="">
      <Navbar onSearch={handleSearch} />
      {isInput && input.length > 0 ? (
        <Movies search={input} />
      ) : isInput && input.length === 0 ? (
        <div className="alert alert-info" role="alert">
          Please enter a search term.
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
