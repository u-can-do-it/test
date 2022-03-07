import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Comments } from "./pages/Comments";
import { Users } from "./pages/Users";
import { Navbar } from "./layout/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="*" element={<Navigate to="/users" />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
