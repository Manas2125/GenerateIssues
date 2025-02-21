import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar.tsx";
import Landing from "./Pages/Landing.tsx";
import Aboutus from "./Pages/Aboutus.tsx";
import Login from "./Pages/Login.tsx";
import User from "./Pages/User.tsx";
// import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/home" element={<User />}/>
          <Route path="/about" element={<Aboutus />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ div>
  );
}

export default App;
