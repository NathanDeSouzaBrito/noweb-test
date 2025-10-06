import "./App.css";
import Home from "./page/home/home";
import { Routes, Route } from "react-router-dom";
import ErrorTemplate from "./page/error";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/error" element={<ErrorTemplate />} />
    </Routes>
  );
};

export default App;
