import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignupPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";
import TroubleLoggingIn from "./components/TroubleLoggingIn";
import Header from "./components/Header";
import Profile from "./components/Profile";
import InstructorProfile from "./components/InstructorProfile";
import CalenderComponent from "./components/CalenderComponent";
import SignupPageForStudent from "./components/SignUpPageForStudent";

import DatePicker from "./components/DatePicker";
import DashboardStu from "./components/DashboardStu";
import DashboardInstructor from "./components/DashboardInstructor";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/troublelogging" element={<TroubleLoggingIn />} />
        <Route path="/student" element={<DashboardStu />} />
        <Route path="/instructor" element={<DashboardInstructor />} />

        <Route path="/header" element={<Header />}></Route>
        <Route
          path="/instructorprofile"
          element={<InstructorProfile />}
        ></Route>

        <Route path="/calender" element={<CalenderComponent />}></Route>
        <Route path="/signupstudent" element={<SignupPageForStudent />}></Route>
        <Route path="/" element={<SignupPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/troublelogging" element={<TroubleLoggingIn />} />
        <Route path="/calendar" element={<DatePicker />} />

        <Route path="/header" element={<Header />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
