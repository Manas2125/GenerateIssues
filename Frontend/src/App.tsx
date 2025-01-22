import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar.tsx";
import Home from "./Pages/Home.tsx";
import Aboutus from "./Pages/Aboutus.tsx";
import Login from "./Pages/Login.tsx";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<Aboutus />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
