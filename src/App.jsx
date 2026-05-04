import { Routes, Route } from "react-router-dom";
import Home from "./features/pages/Home";
import About from "./features/pages/About";
import Contact from "./features/pages/Contact";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
