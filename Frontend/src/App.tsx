import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar.tsx";
import Landing from "./Pages/Landing.tsx";
import Aboutus from "./Pages/Aboutus.tsx";
import Login from "./Pages/Login.tsx";
import User from "./Pages/User.tsx";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/home" element={<User />}/>
          <Route path="/about" element={<Aboutus />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
