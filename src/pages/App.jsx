import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About"
import Contact from "./pages/Contact"
import "./styles/Nav.css";
import { Route, Routes } from "react-router-dom";
import UserDetails from "./pages/UserDetails";
import User from "./pages/User";
import Nav from "../components/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Nav/>
      {/* <Home /> */}
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/User" element={< User/>} />
 <Route path="/User/:id" element={<UserDetails />} />   
</Routes>;
    </>
  );
}
export default App;
