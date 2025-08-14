import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import UserDetails from "./pages/UserDetails copy";
import Nav from "./components/Nav";
import ToDoList from "./pages/ToDoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/User" element={<User />} />
        <Route path="/User/:id" element={<UserDetails />} />
        <Route path="/ToDoList" element={<ToDoList />} />
      </Routes>
    </>
  );
}

export default App;
