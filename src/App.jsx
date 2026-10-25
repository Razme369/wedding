import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Story from "./pages/story";
import Details from "./pages/details";

function App() {
  return (
    <BrowserRouter>

      <nav className="wedding-nav">

        <div className="nav-logo">
          E & A
        </div>

        <div className="nav-links">

          <Link to="/">
            Invitation
          </Link>

          <Link to="/story">
            Their Story
          </Link>

          <Link to="/details">
            Wedding Details
          </Link>

        </div>

      </nav>


      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/story" element={<Story />} />

        <Route path="/details" element={<Details />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;