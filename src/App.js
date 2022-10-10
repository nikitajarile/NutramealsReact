import "./App.css";
// import HomePageHeader from "./components/HomePage/HomePageHeader";

import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import HomePage from "./components/HomePage/HomePage";
import LoggedInPage from "./components/HomePage/LoggedInPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<LoggedInPage />} />
      </Routes>
    </div>
  );
}

export default App;
