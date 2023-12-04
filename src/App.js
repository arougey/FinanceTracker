import React from "react";
import Input from "./screens/Signup";
import Dashboard from "./screens/Dashboard";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Page4 from "./components/Page4";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Input/>}></Route>
          <Route path="/Dashboard" element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}