import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import Home from "../src/pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "../src/pages/Projects";
import Contact from "../src/pages/Contact";
import Footer from "./components/Footer/Footer";
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
