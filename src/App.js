import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Planner from "./pages/Planner";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">

      <Header />

      <div className="flex-fill">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />

    </div>
  );
}

export default App;
