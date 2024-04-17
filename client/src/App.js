import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignupPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";
import TroubleLoggingIn from "./components/TroubleLoggingIn";
import Header from "./components/Header";
import Profile from "./components/Profile";

import DatePicker from "./components/DatePicker";
import DashboardStu from "./components/DashboardStu";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/troublelogging" element={<TroubleLoggingIn />} />
        <Route path="/calendar" element={<DatePicker />} />
        <Route path="/student" element={<DashboardStu />} />
        <Route path="/header" element={<Header />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
