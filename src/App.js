import Input from "./screens/Signup";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Input />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}