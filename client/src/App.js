import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

<<<<<<< HEAD
import SignupPage from './components/SignUpPage';
import SignInPage from './components/SignInPage';
import TroubleLoggingIn from './components/TroubleLoggingIn';
import Header from './components/Header';
import Profile from './components/Profile';
=======
import SignupPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";
import TroubleLoggingIn from "./components/TroubleLoggingIn";
import Header from "./components/Header";
import Profile from "./components/Profile";
>>>>>>> c6c162d652baf573adeb2ef28107c390928e0985

const App = () => {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<SignupPage />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/troublelogging' element={<TroubleLoggingIn />} />
        <Route />
        <Route path='/header' element={<Header />}></Route>
=======
        <Route path="/" element={<SignupPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/troublelogging" element={<TroubleLoggingIn />} />
        <Route />
        <Route path="/header" element={<Header />}></Route>
>>>>>>> c6c162d652baf573adeb2ef28107c390928e0985
      </Routes>
    </Router>
  );
};

export default App;
