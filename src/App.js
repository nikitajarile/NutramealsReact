import "./App.css";
// import HomePageHeader from "./components/HomePage/HomePageHeader";
import './assets/vendor/animate.css/animate.min.css';
import './assets/vendor/aos/aos.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';

import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import HomePage from "./components/HomePage/HomePage";
import LoggedInPage from "./components/HomePage/LoggedInPage";
import Register from "./components/Login/Register";
import AccountSummary from "./components/AccountSummary/AccountSummary";
import Error from "./components/error";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<LoggedInPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signOut" element={<HomePage />} />
        <Route path="/accountSummary" element={<AccountSummary />} />
        <Route path="/errorPage" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
